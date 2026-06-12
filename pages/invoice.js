import { expect } from '@playwright/test'
import {switchToPopup} from '../utilities/popup.js'


export class invoicePage {
    constructor(page) {
        this.page = page;
        this.more = page.locator('//a[text()="More"]'),
            this.invoiceLink = page.locator('//a[@name="Invoice"]'),
            this.createInvoiceButton = page.getByAltText('Create Invoice...'),
            this.invoiceHeader = page.locator('//a[text()="Invoice"  and @class="hdrLink"]'),
            this.invoicepage = page.locator('//span[text()="Creating New Invoice"]'),
            this.subjectInput = page.locator('//input[@name="subject"]'),
            this.contactNameInput = page.locator('//input[@name="contact_name"]/following-sibling::img'),
            this.accountNameInput = page.locator('//input[@name="account_name"]/following-sibling::img'),
            this.contact = ('//a[@id="1"]'),
            this.account = ('//a[@id="6"]'),
            this.salesOrderName = page.locator('//input[@name="salesorder_name"]/following-sibling::img'),
            this.salesOrder = ('//a[@id="1"]')
            this.billStreet = page.locator('//textarea[@name="bill_street"]'),
            this.shipStreet = page.locator('//textarea[@name="ship_street"]'),
            this.searchIcon = page.locator('#searchIcon1'),
            this.productName = ('//a[text()="Charger"]'),
            this.qtyInput = page.locator('#qty1'),
            this.saveButton = page.locator('//input[@accesskey="S"]'),
            this.invoiceSubject = page.locator('#dtlview_Subject')



    }
    async createInvoice(subject, billStreet, shipStreet, qty, invoiceHeader) {
        await this.more.hover();
        await expect(this.more).toBeVisible();
        await this.invoiceLink.click();
        await expect(this.invoiceHeader).toBeVisible();
        await this.createInvoiceButton.click();
        await expect(this.invoicepage).toContainText(invoiceHeader);
        await this.subjectInput.fill(subject);
        await expect(this.subjectInput).toHaveValue(subject);
        let popup = await switchToPopup(this.page, ()=>{this.contactNameInput.click()})
        await popup.locator(this.contact).click();
        let popup2 = await switchToPopup(this.page, ()=>{this.accountNameInput.click()})
        await popup2.locator(this.account).click();
        let popup3 = await switchToPopup(this.page,()=>{this.salesOrderName.click()})
        await popup3.locator(this.salesOrder).waitFor({ state: 'visible' })
        await popup3.locator(this.salesOrder).click();
        await this.billStreet.fill(billStreet);
        await expect(this.billStreet).toHaveValue(billStreet);
        await this.shipStreet.fill(shipStreet);
        await expect(this.shipStreet).toHaveValue(shipStreet);
        let popup4 = await switchToPopup(this.page,()=>{this.searchIcon.click()})
        await popup4.locator(this.productName).waitFor({ state: 'visible' });
        await popup4.locator(this.productName).click();
        await this.qtyInput.fill(qty);
        await expect(this.qtyInput).toHaveValue(qty);
        await this.saveButton.nth(1).click();

    }
    async verifyInvoice(subject) {
        let order = await this.invoiceSubject.textContent();
        await expect(this.invoiceSubject).toContainText(subject);
    }
}