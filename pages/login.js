import { expect } from "@playwright/test";
import { getRowData, readExcel } from '../utilities/excelread.js'

export class LoginPage {
    constructor(page) {
        this.page = page,
            this.username = page.locator('//input[@name="user_name"]'),
            this.password = page.locator('//input[@name="user_password"]'),
            this.loginButton = page.getByRole('button', { name: "Login" }),
            this.homePage = page.locator('//a[@href="index.php?action=index&module=Home"]'),
            this.userIcon = page.locator('//img[@src="themes/softed/images/user.PNG"]'),
            this.signOut = page.locator('//a[text()="Sign Out"]'),
            this.invalidErrorMessage = page.locator('//div[@class="errorMessage"]')
    }
    async launch(url) {
        await this.page.goto(url);
        await expect(this.page).toHaveURL(url)
    }
    async logindetail(username, password) {
        await this.username.fill(username);
        await expect(this.username).toHaveValue(username)
        await this.password.fill(password);
        await expect(this.password).toHaveValue(password)
        await this.loginButton.click();
    }
    async verifyHomePage(homeurl) {
        await expect(this.page).toHaveURL(homeurl);
        await expect(this.homePage).toBeVisible();
    }
    async signout(url) {
        await this.userIcon.click();
        await this.signOut.click();
        await expect(this.page).toHaveURL(url);
    }
    async multiplelogintest() {
        let rdlo = await getRowData('D:/testing/M20_M8_M6/vtiger/Vtiger_DDT_POM_Excel/test-data/Datatest.xlsx', 'login', 2);
        let rd1 = await readExcel('D:/testing/M20_M8_M6/vtiger/Vtiger_DDT_POM_Excel/test-data/Datatest.xlsx', 'multiplelogin');
        await this.signout(rdlo.url);
        for (let credential of rd1) {
            await this.logindetail(credential.userName, credential.passWord)
            if (this.page.url() === rdlo.Homeurl) {
                console.log("Valid credentails");
                await this.verifyHomePage(rdlo.Homeurl);
                await this.signout(rdlo.url);
                console.log("logout");
            }
            else {
                console.log("Invalid credential");
                const errorMessage = await this.invalidErrorMessage.textContent();
                console.log(errorMessage.trim());
                await this.logindetail(rdlo.userName, rdlo.passWord);
            }
        }
    }

}

