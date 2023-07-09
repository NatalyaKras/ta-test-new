/* eslint-disable prettier/prettier */
import { expect, test } from '@Test';

test.describe('Item controls on cart page', () => {
    //переходим в корзину
    test.beforeEach(async ({ categoryPage, productPage}) => {
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
});

    test('check qantity when adding and remove product', async ({cartPage}) => {
        const price = Number(await cartPage.getPrice()); 

        //проверяем цену при добавлении товара
        await cartPage.CartItem.increaseClick(); 
        const expectedPrice = Number(await cartPage.getPrice()); 
        const priceAfterIncrease = price*2 
        expect(priceAfterIncrease).toBe(expectedPrice); 

        //проверяем цену при удалении товара
        await cartPage.CartItem.decreaseClick(); 
        const expectedPriceIncrease = Number(await cartPage.getPrice());
        expect(expectedPriceIncrease).toBe(price);
        
});
    test('remove product', async ({cartPage}) => {
        //очищаем корзину
        await cartPage.CartItem.removeProductClick()
        await cartPage.CartItem.isEmpty()
    });

});