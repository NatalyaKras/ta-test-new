/* eslint-disable prettier/prettier */
import { expect, test } from '@Test';

test.describe('"CheckoutNonInteraction" "Error" events', () => {
    const expectedEvent = {
        event: "CheckoutNonInteraction",
        eventAction: "Step 2 - Credit card",
        eventCategory: "Checkout - D",
    };

    test.beforeEach(async ({ categoryPage, productPage, cartPage, checkoutPage, }) => {
        await categoryPage.open('sunglasses');
        await categoryPage.chooseProduct();
        await productPage.addToCartClick(); 
        await cartPage.proceedToCheckoutClick(); 
        const deliveryForm = checkoutPage.Form;
        await deliveryForm.fill(); 
        await checkoutPage.DeliveryStep.clickContinue();
    });

    test('catch events when paying by Сredit card', async ({dataLayer, checkoutPage, thankYouPage}) => {
        const verifyEvent = dataLayer.createEventVerifier(expectedEvent);

        const incorrectNumber = '4222 2222 2222 2222'
        await checkoutPage.CreditCard.cardFill(incorrectNumber);
        await checkoutPage.CreditCard.placeOrderClick();
        await verifyEvent('Error – Please enter a valid credit card number');

        const correctNumber = '4111 1111 1111 1111'
        await checkoutPage.CreditCard.cardFill(correctNumber);
        await checkoutPage.CreditCard.placeOrderClick();
        await verifyEvent('Error – Please enter a valid expiration date');

        const expirationDate = '0330'
        await checkoutPage.CreditCard.dateFill(expirationDate);
        await checkoutPage.CreditCard.placeOrderClick();
        await verifyEvent("Error – Please enter your card's security code (CVV/CID)");

        await checkoutPage.PaymentStep.CashOnDelivery.cashOnDeliveryCheck();
        await checkoutPage.PaymentStep.CashOnDelivery.placeOrderClick();

        await thankYouPage.waitEvent()

        const expectedEventTY = {
            event: "CheckoutInteraction",
            eventCategory: "Checkout - D",
            eventAction: "Step 2 - Payment",
        };

        const verifyEventTY = dataLayer.createEventVerifier(expectedEventTY);
        await verifyEventTY('CTA - Place Order - Cash On Delivery');


});
});