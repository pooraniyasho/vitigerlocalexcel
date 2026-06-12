import { expect } from "@playwright/test"
import {selectByIndex,selectByLabel,selectByValue } from '../utilities/dropdown.js'

export class LeadPage {
    constructor(page) {
        this.page = page,
            this.leadModule = page.locator('//a[text()="Leads"]'),
            this.createLeadButton = page.getByAltText('Create Lead...'),
            this.salutationtype = page.locator('//select[@name="salutationtype"]'),
            this.firstname = page.locator('//input[@name="firstname"]'),
            this.lastname = page.locator('//input[@name="lastname"]'),
            this.company = page.locator('//input[@name="company"]'),
            this.mobile = page.locator('#mobile'),
            this.email = page.locator('#email'),
            this.save = page.locator('//input[@accesskey="S"]').nth(0),
            this.closingdate = page.locator('//input[@name="closingdate"]'),
            this.saveButton = page.locator('//input[@name="Save"]'),
            this.convertLeadButton = page.locator('//a[text()="Convert Lead"]'),
            this.potentialsCheckbox = page.locator('//input[@value="Potentials"]'),
            this.organizationCheckbox = page.locator('//input[@value="Accounts"]'),
            this.contactCheckbox = page.locator('//input[@value="Contacts"]'),
            this.leadCheckbox = page.locator('//input[@value="Leads"]'),
            this.convertSaveButton = page.locator('//input[@name="Save"]'),
            this.organizationName = page.locator('//span[@id="dtlview_Organization Name"]'),
            this.firstName = page.locator('//span[@id="dtlview_First Name"]'),
            this.popuphead = page.locator('//img[@src="themes/images/Leads.gif"]/parent::td[@class="genHeaderSmall"]')
    }

    async createLead(firstname, salutationtype, lastname, company, mobile, email) {
        await this.leadModule.click(),
            await expect(this.createLeadButton).toBeVisible(),
            await this.createLeadButton.click(),
            await expect(this.page.locator('//span[text()="Creating New Lead"]')).toBeVisible(),
            await selectByValue(this.salutationtype,salutationtype),
            await expect(this.salutationtype).toHaveValue(salutationtype),
            await this.firstname.fill(firstname),
            await expect(this.firstname).toHaveValue(firstname),
            await this.lastname.fill(lastname),
            await expect(this.lastname).toHaveValue(lastname),
            await this.company.fill(company),
            await expect(this.company).toHaveValue(company),
            await this.mobile.fill(mobile),
            await expect(this.mobile).toHaveValue(mobile),
            await this.email.fill(email),
            await expect(this.email).toHaveValue(email),
            await this.save.click()
    }

    async verifyLead(firstName) {
        let ccname = await this.firstName.textContent();
        await expect(this.firstName).toContainText(firstName);
        console.log(ccname);
    }
    async convertLead(closingdate) {
            await this.convertLeadButton.click(),
            await this.popuphead.waitFor({state:'visible'}),
            await expect(this.popuphead).toBeVisible;
            await this.potentialsCheckbox.click(),
            await expect(this.potentialsCheckbox).toBeChecked(),
            await this.closingdate.fill(closingdate),
            await expect(this.closingdate).toHaveValue(closingdate),
            await this.saveButton.click()
    }

    async verifycomp(company) {
        let compname = await this.organizationName.textContent();
        console.log(compname);
        await expect(this.organizationName).toContainText(company);
    }
}

