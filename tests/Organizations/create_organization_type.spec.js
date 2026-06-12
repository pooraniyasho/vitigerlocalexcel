import {test} from '../../fixtures/customFixture.js'
import  {Randomnumber}  from '../../utilities/Randomnumber.js'

test('Create organiz2', async ({ organizationPage, readex }) => {
    test.slow();

    await organizationPage.clickOnOrganizationTab();
    await organizationPage.verifyOrganizationTab();
    await organizationPage.clickOnCreateOrganization();
    await organizationPage.verifyCreateOrganization();
    let orgdet= await readex('Organization', 2);
    let randname=Randomnumber();
    let orgName = orgdet.OrganizationName + randname;
    await organizationPage.createOrganization(orgName, orgdet.industry, orgdet.accountType);
    await organizationPage.verifyOrganizationCreation(orgName);
});