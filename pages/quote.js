import { expect } from "@playwright/test";
import{switchToPopup}from '../utilities/popup.js'

export class quotePage {
    constructor(page) {
        this.page = page;
        this.more=page.locator('//a[text()="More"]'),
        this.qupage=page.locator('//a[text()="Quotes"and @class="drop_downnew"]'),
        this.header=page.locator('//a[text()="Quotes" and @class="hdrLink"]'),
        this.createquote=page.getByAltText('Create Quote...'),
        this.quoteheader=page.locator('//span[@class="lvtHeaderText"]'),
        this.subject=page.locator('//input[@name="subject"]'),
        this.potentialname=page.locator('//input[@name="potential_name"]/following-sibling::img'),
        this.contactname=page.locator('//input[@name="contact_name"]/following-sibling::img'),
        this.accountname=page.locator('//input[@name="account_name"]/following-sibling::img'),
        this.billstreet=page.locator('//textarea[@name="bill_street"]'),
        this.shipstreet=page.locator('//textarea[@name="ship_street"]'),
        this.productsearch=page.locator('#searchIcon1'),
        this.qty=page.locator('#qty1'),
        this.savebutton=page.locator('//input[@accesskey="S"]'),
        this.potential=('//a[@id="5"]');
        this.contact=('//a[@id="1"]');
        this.account=('//a[@id="1"]');
        this.product=('//a[text()="Charger"]');
        this.quoteinfo=page.locator('//span[@class="lvtHeaderText"]');
    }
    async createQuote(subject,billstreet,shipstreet,quoteheader){
        await this.more.hover();
        await this.qupage.click();
        await expect(this.header).toBeVisible();
        await this.createquote.click();
        await expect(this.quoteheader).toContainText(quoteheader);
        await this.subject.fill(subject);
        let popup= await switchToPopup(this.page,()=>{this.potentialname.click()})
        await popup.locator(this.potential).click();
        let popup2= await switchToPopup(this.page,()=>{this.contactname.click()})
        await popup2.locator(this.contact).click();
        let popup3= await switchToPopup(this.page,()=>{this.accountname.click()})
        await popup3.locator(this.account).click();
        await this.billstreet.fill(billstreet);
        await this.shipstreet.fill(shipstreet);
        let popup4= await switchToPopup(this.page,()=>{this.productsearch.click()})
        await popup4.locator(this.product).click();
        await this.qty.fill('10');
        await this.savebutton.nth(1).click();
    }
    async verifyQuoteCreation(subject){
        let quoteheadertext= await this.quoteinfo.textContent();
        console.log(quoteheadertext);
        await expect(this.quoteinfo).toContainText(subject);
    }
        
        }