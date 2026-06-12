import {test} from '../../fixtures/customFixture.js';
import {getRowData} from '../../utilities/excelread.js'
import{LoginPage} from '../../pages/login.js'

test('POM Login',async ({signin,readex}) => {
    //validation
    test.slow();
     const lgdata = await readex('login', 2);
    await signin.verifyHomePage(lgdata.Homeurl);

    })