import {test} from '../../fixtures/customFixture.js'
import {Randomnumber} from '../../utilities/Randomnumber.js'


test('Create contact', async ({contactPage,readex }) => {
 test.slow()
    const condata = await readex('contact', 2);
    let randname=Randomnumber();
    let contactname=condata.firstname+randname;
    await contactPage.createContact(contactname, condata.lastname, condata.salutationtype);
    await contactPage.verifycontact(contactname);
})
