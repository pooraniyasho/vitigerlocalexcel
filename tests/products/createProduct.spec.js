import {test} from '../../fixtures/customFixture.js'
import {Randomnumber}  from '../../utilities/Randomnumber.js'

test('Create product', async ({ productsPage,readex}) => {
    test.slow();
    let productde = await readex('product', 2);
    let randname=Randomnumber();
    let proName = productde.productname+randname;
    await productsPage.createproductdetail(proName, String(productde.unitPrice), productde.usageunit, String(productde.qtyinstock), productde.path, productde.path, productde.uploadpath);
    await productsPage.verifyproduct(proName);

});