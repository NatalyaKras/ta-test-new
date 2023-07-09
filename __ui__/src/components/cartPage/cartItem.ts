/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';

export class CartItem extends Component {
    protected LOCATORS = {
    increaseBtn: this.page.locator('//button[@aria-label="increase value"]'),
    decreaseBtn: this.page.locator('//button[@aria-label="decrease value"]'),
    removeBtn: this.page.locator('[data-test-name="removeCartItem"]'),
    yesBtn: this.page.locator('//button[contains(., "Yes")]'),
    isEmpty: this.page.locator('//h2[contains(., "Shopping Cart is Empty")]'),
    }

    public async increaseClick(): Promise<void> {
        await this.LOCATORS.increaseBtn.click();
    }

    public async decreaseClick(): Promise<void> {
        await this.LOCATORS.decreaseBtn.click();
    }
    public async removeProductClick(): Promise<void> {
        await this.LOCATORS.removeBtn.click();
        await this.LOCATORS.yesBtn.click();
    }
    
    public async isEmpty(): Promise<void> {
        await this.LOCATORS.isEmpty.waitFor()
    }

}
