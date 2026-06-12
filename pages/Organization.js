import{expect} from '@playwright/test'
import {
  selectByValue,
  selectByLabel,
  selectByIndex
} from '../utilities/dropdown.js'

export class organizationPage{
    constructor(page){
        this.page=page,
        this.organizationtab=page.locator('//a[text()="Organizations"]/parent::td[@class="tabUnSelected"]'),
        this.organaizationheader=page.locator('//a[text()="Organizations" and @class="hdrLink"]'),
        this.createorgbut= page.getByAltText('Create Organization...'),
        this.creatorgheader=page.locator('//span[text()="Creating New Organization"]'),
        this.orgName=page.locator('//input[@name="accountname"]'),
        this.industry= page.locator('//select[@name="industry"]'),
        this.accountType=page.locator('//select[@name="accounttype"]'),
        this.savebutton=page.locator('//input[@accesskey="S"]'),
        this.orginfo=page.locator('//span[@id="dtlview_Organization Name"]')
    }
    async clickOnOrganizationTab(){
        await this.organizationtab.click();
    }
    async verifyOrganizationTab(){
        await expect(this.organaizationheader).toBeVisible();
    }
    async clickOnCreateOrganization(){
        await this.createorgbut.click();
    }
    async verifyCreateOrganization(){
        await expect(this.creatorgheader).toBeVisible();
    }
    async createOrganization(orgNames,inds,acctypes){
        await this.orgName.fill(orgNames);
        await expect(this.orgName).toHaveValue(orgNames);
        await selectByValue(this.industry,inds);
        await selectByValue(this.accountType,acctypes);
        await this.savebutton.nth(0).click(); 
 
    }
    async verifyOrganizationCreation(organizationName){
        let organiza= await (this.orginfo).innerText();
        await expect(this.orginfo).toContainText(organizationName);
    }
}


