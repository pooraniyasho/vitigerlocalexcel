import { test} from '../../fixtures/customFixture.js';
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('Create invoice', async ({ invoicePage,readex}) => {
    test.slow();
    let invo= await readex('invoice', 2);
   let randname=Randomnumber();
    let invoiceSubject = invo.subject + randname;
    await invoicePage.createInvoice(invoiceSubject, invo.billStreet, invo.ShipStreet, String(invo.qty), invo.invoheader);
    await invoicePage.verifyInvoice(invoiceSubject);
})