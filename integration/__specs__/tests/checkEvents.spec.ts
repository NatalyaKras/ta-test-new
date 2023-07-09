/* eslint-disable prettier/prettier */
import { CartPageContainer } from '@Components/cartPage/cartPage';
import { Mock } from '@Core/mock';
import { GetCartProductsMock } from '@Mocks/products/get';

describe('Cart page content', () => {
    const cartPage = new CartPageContainer();
    const mock = Mock.getInstance();

    test('Сhecking the sum, event "Remove item" and event "Proceed to Checkout"', async () => {
        // Добавляем мок для запроса на товары в корзине
        mock.addMocks(new GetCartProductsMock());
        // Рендерим страничку
        await cartPage.fulfill();

        const cartList = await cartPage.getCartList(); 
        const cartItems = await cartList.getCartItems();
         // Получаем все карточки
        const allItems = cartItems.slice(0, 5);

        let sumSubtotal = 0
        for (const item of allItems) {
            const eachSubtotal = await item.getSubtotal();
            sumSubtotal = sumSubtotal + eachSubtotal
        }
        //Запрашиваем общую стоимость всех товаров
        const totalPrice = await cartPage.getTotalPrice();
        expect(sumSubtotal).toBe(totalPrice);

        //Удаляем все товары из корзины
        for (const item of allItems) {
            await item.remove();
        }
        
        //Проверяем, пуста ли корзина
        const totalPriceAfterRemove = await cartPage.getTotalPrice();
        expect(cartPage.isEmpty()).toBe(true);
        expect(totalPriceAfterRemove).toBe(0);
        expect(await cartPage.isDisabled()).toBe(true)

        //Ловим 5 событий "Remove item"
        reporter.startStep('Check event after clicking Remove item');
        const removeEvents = window.dataLayer.filter(e => e.name === 'Remove item');
        expect(removeEvents).toMatchObject(
            [{"name": "Remove item",
             "value": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"},

             {"name": "Remove item", 
             "value": "Mens Casual Premium Slim Fit T-Shirts "}, 

             {"name": "Remove item", 
             "value": "Mens Cotton Jacket"}, 

             {"name": "Remove item", 
             "value": "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor"},

            {"name": "Remove item", 
            "value": "Acer SB220Q bi 21.5 inches Full HD IPS Ultra-Thin"}]
        )
        window.dataLayer = [];
        reporter.endStep();

        //Добавляем новый товар
        await cartPage.createNewItem();
        await cartPage.addNewItemButtonClick();
        await cartPage.showNewItem();

        //Ловим событие "Proceed To Checkout"
        reporter.startStep('Check event after clicking Proceed to Checkout');
        await cartPage.proceedToCheckoutClick();
        const proceedToCheckoutEvent = window.dataLayer.find(e => e.name === 'Proceed to Checkout');
        expect(proceedToCheckoutEvent).toMatchObject({
            name: 'Proceed to Checkout',
            value: `$92.00`,
        });
        reporter.endStep();
        window.dataLayer = [];
        cartPage.debug();
        
    });
});






