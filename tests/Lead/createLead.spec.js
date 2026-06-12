import { test} from '../../fixtures/customFixture.js'
import {Randomnumber} from '../../utilities/Randomnumber.js'


test('Create leads', async ({ leadPage,readex }) => {
test.slow()
    const ledata= await readex('lead', 2);
    let randname=Randomnumber();
    let leadname=ledata.firstname+randname;
    await leadPage.createLead(leadname, ledata.salutationtype, ledata.lastname, ledata.company, String(ledata.mobile), ledata.email);
    await leadPage.verifyLead(leadname);
    await leadPage.convertLead(ledata.closingdate);
    await leadPage.verifycomp(ledata.company);
});