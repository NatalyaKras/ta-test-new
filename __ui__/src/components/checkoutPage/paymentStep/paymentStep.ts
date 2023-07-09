/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';
import { CashOnDelivery } from './paymentMethods/cashOnDelivery';

export class PaymentStep extends Component {
    protected LOCATORS = {
        payment: this.locator.locator('//div[@name="paymentStep"]'),
    };

    public CashOnDelivery = new CashOnDelivery(this.LOCATORS.payment, this.page);

}
