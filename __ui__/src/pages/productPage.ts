/* eslint-disable prettier/prettier */
import { Wizard } from '@Components/cartPage/wizard';
import { Container } from '@Core/container';
import type { Locator } from '@playwright/test';

export class ProductPage extends Container {
    protected LOCATORS = {
        wizardContainer: this.page.locator('//section[contains(@class,"wizardContainer")]'),
        addToCartBtn: this.page.locator('//button[@aria-label= "add to cart"]'),
        selecetLensesBtn:  this.page.locator('//button[@aria-label="choose lenses"]'),
        closePopup: this.page.locator('//button[@aria-label="Close popup"]'),
    };

    public Wizard = new Wizard(this.LOCATORS.wizardContainer, this.page);
    public async addToCartClick(): Promise<void> {
        await this.LOCATORS.addToCartBtn.click();
    }

    public async selecetLensesClick(): Promise<void> {
        await this.LOCATORS.selecetLensesBtn.click();
    }

    public async closePopupClick(): Promise<void> {
        await this.LOCATORS.closePopup.click();
    }

}
