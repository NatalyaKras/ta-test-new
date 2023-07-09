/* eslint-disable prettier/prettier */
import { CartItem } from '@Components/cartPage/cartItem';
import { Container } from '@Core/container';
import { waitFor } from '@Utils/waitFor';


export class CartPage extends Container {
    protected LOCATORS = {
        cartItem: this.page.locator('[data-test-name="cartItem"]'),
        proceedToCheckoutBtn: this.page.locator('//button[contains(., "Proceed to Checkout")]'),
        subtotal: this.page.locator('[id="summary_subtotal"]'), 
    };

    public CartItem = new CartItem(this.LOCATORS.cartItem, this.page);

    public async proceedToCheckoutClick(): Promise<void> {
        await this.LOCATORS.proceedToCheckoutBtn.click();
    }
    
    public async getPrice(): Promise<string> { 
        await this.page.waitForTimeout(4000); 
        await this.page.waitForLoadState('domcontentloaded');
        const subtotal = await this.LOCATORS.subtotal.textContent();
        return subtotal ? subtotal.replace('$', '') : '';
    }

}
