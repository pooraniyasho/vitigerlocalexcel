import { expect } from "@playwright/test";
import {switchToPopup}from '../utilities/popup.js'

export class salePage {
    constructor(page) {
        this.page = page,
            this.more = page.locator('//a[text()="More"]'),
            this.salesmodule = page.locator('//a[@name="Sales Order"]'),
            this.sales = page.locator('//a[text()="Sales Order" and @class="hdrLink"]'),
            this.createbutton = page.getByAltText('Create Sales Order...'),
            this.salesheader = page.locator('//span[@class="lvtHeaderText"]'),
            this.salessub = page.locator('//input[@name="subject"]'),
            this.quotename = page.locator('//input[@name="quote_name"]/following-sibling::img'),
            this.quote = ('//a[@id="4"]'),
            this.contactname = page.locator('//input[@name="contact_name"]/following-sibling::img'),
            this.contact = ('//a[@id="9"]'),
            this.potentialname = page.locator('//input[@name="potential_name"]/following-sibling::img'),
            this.potential = ('//a[@id="5"]'),
            this.accountname = page.locator('//input[@name="account_name"]/following-sibling::img'),
            this.account = ('//a[@id="1"]'),
            this.billstreet = page.locator('//textarea[@name="bill_street"]'),
            this.shipstreet = page.locator('//textarea[@name="ship_street"]'),
            this.productsearch = page.locator('#searchIcon1'),
            this.productname = ('//a[text()="Charger"]'),
            this.quantity = page.locator('#qty1'),
            this.savebutton = page.locator('//input[@accesskey="S"]'),
            this.saleinfo = page.locator('#dtlview_Subject'),
            this.createinvoice = page.locator('//a[text()="Create Invoice"]'),
            this.invoicehead = page.locator('//span[@class="lvtHeaderText"]'),
            this.saveinvoice = page.locator('//input[@accesskey="S"]')
    }
    async createsales(salesheader, subject, billStreet, shipStreet, qty) {
        await this.more.hover();
        await expect(this.more).toBeVisible();
        await this.salesmodule.click();
        await expect(this.sales).toBeVisible();
        await this.createbutton.click();
        await expect(this.salesheader).toContainText(salesheader);
        await this.salessub.fill(subject);
        await expect(this.salessub).toHaveValue(subject);
        let popup =await switchToPopup(this.page,()=>{this.quotename.click()})
        await popup.locator(this.quote).click()
        let popup2 =await switchToPopup(this.page,()=>{this.contactname.click()})
        await popup2.locator(this.contact).click();
        let popup3 =await switchToPopup(this.page,()=>{this.potentialname.click()})
        await popup3.locator(this.potential).click();
        let popup4 =await switchToPopup(this.page,()=>{this.accountname.click()})
        await popup4.locator(this.account).click();
        await this.billstreet.fill(billStreet);
        await expect(this.billstreet).toHaveValue(billStreet);
        await this.shipstreet.fill(shipStreet);
        await expect(this.shipstreet).toHaveValue(shipStreet);
        let popup5=await switchToPopup(this.page,()=>{this.productsearch.click()})
        await popup5.locator(this.productname).click()
        await this.quantity.fill(qty);
        await expect(this.quantity).toBeVisible(qty);
        await this.savebutton.nth(1).click();

    }
    async verifysalesinfo(subject) {
        let order = await this.saleinfo.textContent();
        await expect(this.saleinfo).toContainText(subject);
        console.log(order);

    }
    async generateinvoice(invoiceheader) {
        await this.createinvoice.click();
        await expect(this.invoicehead).toContainText(invoiceheader);
        await this.saveinvoice.nth(0).click();
    }

}