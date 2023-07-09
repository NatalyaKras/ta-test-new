/* eslint-disable prettier/prettier */
import { Container } from '@Core/container';
import { Form } from '@Components/checkoutPage/deliveryStep/form/form';
import { DeliveryStep } from '@Components/checkoutPage/deliveryStep/deliveryStep';
import { PaymentStep } from '@Components/checkoutPage/paymentStep/paymentStep';
import { CreditCard } from '@Components/checkoutPage/paymentStep/paymentMethods/creditCard';

export class CheckoutPage extends Container {
    protected LOCATORS = {
        deliveryStep: this.page.locator('//button[., " deliveryFormContinueButton"]'),
        form: this.page.locator('[name="CheckoutDeliveryForm"]'),
        paymentStep: this.page.locator('//div[contains(@name, "paymentStep")]/..'),
        creditCard: this.page.locator(
            '//*[@id="card-number"]/ancestor::form[@name="credit card form"]'
        ),
    };
    public DeliveryStep = new DeliveryStep(this.LOCATORS.deliveryStep, this.page);
    public Form = new Form(this.LOCATORS.form, this.page);
    public PaymentStep = new PaymentStep(this.LOCATORS.paymentStep, this.page);
    public CreditCard = new CreditCard(this.LOCATORS.creditCard, this.page);

}