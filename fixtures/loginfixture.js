import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/login.js';
import { getRowData } from '../utilities/excelread.js';

export let test = base.extend({
    loginapp: async ({ page }, use) => {
        let rd = await getRowData('D:/testing/M20_M8_M6/vtiger/Vtiger_DDT_POM_Excel/test-data/Datatest.xlsx', 'login', 2);
        const lp = new LoginPage(page);
        await lp.launch(rd.url);
        await lp.logindetail(rd.userName, rd.passWord);
        await use(page);
        await lp.signout(rd.url);
    }
});
