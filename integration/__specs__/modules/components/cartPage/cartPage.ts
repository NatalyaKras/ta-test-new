/* eslint-disable prettier/prettier */
import { CartList } from '@Components/cartPage/cartList/cartList';
import { Container } from '@Core/container';
import type { CartStateType } from 'frontend/store/types';
import { fireEvent } from '@testing-library/react';
const SELECTORS = {
    cartList: './/h3[@title="name"]/../..//div/../..',
    emptyCart: './/h2[text()="Cart is empty, please add items"]',
    totalPrice: '//h3[contains(., "Total price:")]/following-sibling::p',
    proceedToCheckoutButton:'.//button[contains(., "Proceed to Checkout")]',
    addNewItemButton: './/button[contains(., "Add new item")]',
    inputName:'.//label[contains(., "Name:")]//input',
    inputPrice:'.//label[contains(., "Price:")]//input',
    inputQuantity: './/label[contains(., "Quantity:")]//input',
    newItem: './/h3[text()="My beloved item"]',
};

export class CartPageContainer extends Container {
    public async fulfill(initialState?: CartStateType): Promise<void> {
        await super.fulfill(initialState);
    }

    public async getCartList(): Promise<CartList> {
        const [cartList] = await document.waitForXpath(SELECTORS.cartList);
        console.log (cartList);
        return new CartList(cartList);
    }

    public async getTotalPrice(): Promise<number> {
        const [textTotalPrice] = await document.waitForXpath(SELECTORS.totalPrice);
        const textSubtotal = textTotalPrice.textContent.replace('$', '');
        return Number(textSubtotal);
    
    }

    public async isDisabled(): Promise<boolean> {
        const [button] = await document.waitForXpath(SELECTORS.proceedToCheckoutButton);
        return button.hasAttribute('disabled');
      }
               
    public isEmpty(): boolean {
        return Boolean(document.$x(SELECTORS.emptyCart));
    }    

    public async addNewItemButtonClick(): Promise<void> {
        await document.clickByXpath(SELECTORS.addNewItemButton);
    }

    public async proceedToCheckoutClick(): Promise<void> {
        await document.clickByXpath(SELECTORS.proceedToCheckoutButton);
    }

    public async createNewItem(): Promise<void> {
        const [inputName] = await document.waitForXpath(SELECTORS.inputName);
        fireEvent.change(inputName, {target:{value: 'My beloved item'}});

        const [inputPrice] = await document.waitForXpath(SELECTORS.inputPrice);
        fireEvent.change(inputPrice, {target:{value: 23}});

        const [inputQuantity] = await document.waitForXpath(SELECTORS.inputQuantity);
        fireEvent.change(inputQuantity, {target:{ value: 4}});
      }

      public async showNewItem(): Promise<void> {
        const newItem = await document.waitForXpath(SELECTORS.newItem);
        console.log(`Проверяем, добавился ли товар: ${newItem}`)
      }
}
