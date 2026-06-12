import{expect} from '@playwright/test'
import{switchToPopup} from '../utilities/popup.js'

export class opportunitiesPage{
    constructor(page){
        this.page=page,
        this.opportunitiesModule=page.locator('//a[text()="Opportunities"]'),
        this.createOpportunitiesButton=page.getByAltText('Create Opportunity...'),
        this.opportunityName=page.locator('//input[@name="potentialname"]'),
        this.Organizations=page.locator('//img[@alt="Select"]').first(),
        this.Campaign=page.locator('//img[@alt="Select"]').nth(1),
        this.saveButton=page.locator('//input[@accesskey="S"]').nth(0),
        this.opportunityNameText=page.locator('//span[@id="dtlview_Opportunity Name"]'),
        this.creatingNewOpportunityText=page.locator('//span[text()="Creating New Opportunity"]')
        this.company=('//a[text()="CTS"]'),
        this.contact=('//a[text()="qspider"]'),
        this.opportunityheader=page.locator('//span[@id="dtlview_Opportunity Name"]')

    }   
    async createOpportunities(OpportunityName){
        await this.opportunitiesModule.click();
        await expect(this.createOpportunitiesButton).toBeVisible();
        await this.createOpportunitiesButton.click();
        await expect(this.creatingNewOpportunityText).toBeVisible();
        await this.opportunityName.fill(OpportunityName);
        await expect(this.opportunityName).toHaveValue(OpportunityName);
        let popup= await switchToPopup(this.page,()=>{this.Organizations.click()})
        await popup.locator(this.company).click()
        let popup2= await switchToPopup(this.page,()=>{this.Campaign.click()})
        await popup2.locator(this.contact,{hasText:"qspider"}).click();
        await this.saveButton.click();
    }
    async verifyOppurtunity(OpportunityName){
        let oppur=await this.opportunityheader.textContent();
    await expect(this.opportunityheader).toContainText(OpportunityName);
    }

}