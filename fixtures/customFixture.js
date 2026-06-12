import { test as base } from './loginfixture.js';
import { getCellData, getRowData, readExcel } from '../utilities/excelread.js'
import { LeadPage } from '../pages/Lead.js';
import { organizationPage } from '../pages/Organization.js';
import { ContactPage } from '../pages/contact.js';
import { invoicePage } from '../pages/invoice.js';
import { LoginPage } from '../pages/login.js';
import { opportunitiesPage } from '../pages/oppurtunities.js';
import { productsPage } from '../pages/products.js';
import { quotePage } from '../pages/quote.js';
import { salePage } from '../pages/sale.js';

export let test = base.extend({
    signin: async ({ loginapp }, use) => {
        const login = new LoginPage(loginapp);
        await use(login);

    },
    readex: async ({ }, use) => {
        const readExcelData = async (sheetname, rownumber) => {
            return await getRowData(
                'D:/testing/M20_M8_M6/vtiger/Vtiger_DDT_POM_Excel/test-data/Datatest.xlsx',
                sheetname,
                rownumber
            );
        };

        await use(readExcelData);
    },
    readexsheet: async ({ }, use) => {
        const readsheet = async (sheetname) => {
            return await readExcel(
                'D:/testing/M20_M8_M6/vtiger/Vtiger_DDT_POM_Excel/test-data/Datatest.xlsx',
                sheetname);
        };
        await use(readsheet);
    },
    leadPage: async ({ loginapp }, use) => {
        const lead = new LeadPage(loginapp);
        await use(lead);
    },
    organizationPage: async ({ loginapp }, use) => {
        const org = new organizationPage(loginapp);
        await use(org);
    },
    contactPage: async ({ loginapp }, use) => {
        const contact = new ContactPage(loginapp);
        await use(contact);
    },
    invoicePage: async ({ loginapp }, use) => {
        const invoice = new invoicePage(loginapp);
        await use(invoice);
    },
    oppurtunitiesPage: async ({ loginapp }, use) => {
        const oppurtunities = new opportunitiesPage(loginapp);
        await use(oppurtunities);
    },
    productsPage: async ({ loginapp }, use) => {
        const products = new productsPage(loginapp);
        await use(products);
    },
    quotePage: async ({ loginapp }, use) => {
        const quote = new quotePage(loginapp);
        await use(quote);
    },
    salePage: async ({ loginapp }, use) => {
        const sale = new salePage(loginapp);
        await use(sale);
    }
})







