/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';

export class CashOnDelivery extends Component {  
    protected LOCATORS = {
        cashOnDeliveryBtn: this.page.locator('//button[contains(.,"Cash On Delivery")]//input'),
        placeOrderBtn: this.page.locator('//button[contains(.,"Cash On Delivery")]/../following-sibling::div//button[contains(.,"Place Order")]'),
    };

public async cashOnDeliveryCheck(): Promise<void> {
    await this.LOCATORS.cashOnDeliveryBtn.check();
}

public async placeOrderClick(): Promise<void> {
    await this.LOCATORS.placeOrderBtn.click();
}
}
