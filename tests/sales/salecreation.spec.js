import {test } from '../../fixtures/customFixture.js'
import  {Randomnumber}  from '../../utilities/Randomnumber.js'


test('Create invoice', async ({ salePage,readex }) => {
  test.slow();
  let salesorder = await readex('sales', 2);
  let randname=Randomnumber();
  let salesub = salesorder.subject + randname;
  await salePage.createsales(salesorder.salesheader, salesub, salesorder.billStreet, salesorder.shipStreet, String(salesorder.qty));
  await salePage.verifysalesinfo(salesub);
  await salePage.generateinvoice(salesorder.InvoiceHeader);
});