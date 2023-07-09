/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';

export class CreditCard extends Component {
    protected LOCATORS = {
        inputCard: this.locator.frameLocator('//div[@id="card-number"]//iframe').locator('#pan'),
        inputDate: this.locator.frameLocator('//div[@id="exp-date"]//iframe').locator('#expiration_date'),
        placeOrderBtn: this.locator.locator('//button[contains(., "Place Order")]'),
    }; 

    public async cardFill(dataToFill: string): Promise<void> {
        await this.LOCATORS.inputCard.click()
        await this.LOCATORS.inputCard.fill(dataToFill);
    }

    public async dateFill(dataToFill: string): Promise<void> {
        await this.LOCATORS.inputDate.click()
        await this.LOCATORS.inputDate.fill(dataToFill);
    }

    public async placeOrderClick(): Promise<void> {
        await this.LOCATORS.placeOrderBtn.click();
    }
}

