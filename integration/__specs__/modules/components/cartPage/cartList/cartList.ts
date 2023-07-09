/* eslint-disable prettier/prettier */
import { CartItem } from '@Components/cartPage/cartList/cartItem/cartItem';
import { Component } from '@Core/component';

const SELECTORS = {
    cartItem: '//h3[@title="name"]/../..',
    inputName:'.//label[contains(., "Name:")]//input',
    inputPrice:'.//label[contains(., "Price:")]//input',
    inputQuantity: './/label[contains(., "Quantity:")]//input',
};

export class CartList extends Component {
    public async getCartItems(): Promise<CartItem[]> {
        const cartItems = await this.element.waitForXpath(SELECTORS.cartItem);
        return cartItems.map(item => new CartItem(item));
    }
      
}
