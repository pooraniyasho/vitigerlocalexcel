import { expect } from '@playwright/test';

import{ selectByIndex,selectByLabel,selectByValue} from '../utilities/dropdown.js'

export class productsPage{
    constructor(page){
        this.page=page,
        this.producttab=page.locator('//a[text()="Products"]'),
        this.productheader=page.locator('//a[text()="Products" and @class="hdrLink"]'),
        this.createproduct=page.getByAltText('Create Product...'),
        this.createproductheader=page.locator(' //span[text()="Creating New Product"]'),
        this.productname=page.locator('//input[@name="productname"]'),
        this.unitprice=page.locator('#unit_price'),
        this.tax1=page.locator('#tax1_check'),
        this.tax2=page.locator('#tax2_check'),
        this.tax3=page.locator('#tax3_check'),
        this.usageunit=page.locator('//select[@name="usageunit"]'),
        this.qtyinstock=page.locator('#qtyinstock'),
        this.uploadfile=page.locator('#my_file_element'),
        this.savebutton=page.locator('//input[@accesskey="S"]').nth(0),
        this.productdetailheader=page.locator('//span[@id="dtlview_Product Name"]')
    }
    
    async createproductdetail(productname,unitPrice,usageunit,qtyinstock,path,uploadpath,filepath){
    
        await this.producttab.click();
        await expect(this.productheader).toBeVisible();
        await this.createproduct.click();
        await expect(this.createproductheader).toBeVisible();
        await this.productname.fill(productname);
        await expect(this.productname).toHaveValue(productname);
        await this.unitprice.fill(unitPrice);
        await expect(this.unitprice).toHaveValue(unitPrice);
        await this.tax1.click();
        await expect(this.tax1).toBeChecked();
        await this.tax2.click();
        await expect(this.tax2).toBeChecked();
        await this.tax3.click();
        await expect(this.tax3).toBeChecked();
        await selectByValue(this.usageunit,usageunit);
        await expect(this.usageunit).toHaveValue(usageunit);
        await this.qtyinstock.fill(qtyinstock);
        await expect(this.qtyinstock).toHaveValue(qtyinstock);    
        await this.uploadfile.setInputFiles(uploadpath);
        await expect(this.uploadfile).toHaveValue(filepath);
        await this.savebutton.click();
    }
    async verifyproduct(productname){
        let cont=await this.productdetailheader.textContent();
        await expect(this.productdetailheader).toContainText(productname)
        console.log(cont);
    }
}