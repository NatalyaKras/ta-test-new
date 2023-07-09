/* eslint-disable prettier/prettier */
import { expect, test } from '@Test';

    test('Item controls on cart page', async ({ categoryPage, productPage, cartPage, checkoutPage}) => {
        await categoryPage.open('eyeglasses-collection');
        await categoryPage.chooseProduct();
        await productPage.closePopupClick()
        await productPage.selecetLensesClick();
        await productPage.Wizard.prescriptionClick();
        await productPage.Wizard.valueFreeClick()
        await productPage.Wizard.continueClick();
        await productPage.Wizard.clearClick();
        await productPage.Wizard.continueClick();
        await productPage.Wizard.noThanksClick();
        await productPage.Wizard.addToCartClick();

        const price = Number(await cartPage.getPrice()); 

//проверяем цену при добавлении товара
    await test.step('check qantity when adding product', async () => {
        await cartPage.CartItem.increaseClick(); 
        const expectedPrice = Number(await cartPage.getPrice()); 
        const priceAfterIncrease = price*2 
        expect(priceAfterIncrease).toBe(expectedPrice); 
    });
        
        //проверяем цену при удалении товара
    await test.step('check qantity when remove product', async () => {
        await cartPage.CartItem.decreaseClick(); 
        const expectedPriceIncrease = Number(await cartPage.getPrice());
        expect(expectedPriceIncrease).toBe(Number(price));
        
});
    //очищаем корзину
    await test.step('remove product', async () => {
        await cartPage.CartItem.removeProductClick()
        await cartPage.CartItem.isEmpty()
    });

});
