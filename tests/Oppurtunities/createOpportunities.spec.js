import{test} from '../../fixtures/customFixture.js'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('create Opportunities',async ({oppurtunitiesPage,readex}) => {
 test.slow();
     let randname=Randomnumber();
    let oppdata= await readex('Opportunity', 2);
    let oppname=oppdata.OpportunityName+randname;
    await oppurtunitiesPage.createOpportunities(oppname);
   //validation
    await oppurtunitiesPage.verifyOppurtunity(oppname);

})