import{test} from '../../fixtures/customFixture.js'
import {Randomnumber} from '../../utilities/Randomnumber.js'

test('Create quote',async ({quotePage,readex}) => {
    test.slow();
let quote = await readex('Quote', 2);
let randname=Randomnumber();
let Quotename=quote.subject+randname;
await quotePage.createQuote(Quotename,quote.bill_street,quote.ship_street,quote.quoteheader);
await quotePage.verifyQuoteCreation(Quotename);
})