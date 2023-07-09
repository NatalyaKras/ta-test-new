/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';

const SELECTORS = {
    subtotal:'.//p[contains(., "Subtotal:")]', 
    removeButton: './/button[contains(., "Remove")]', 
    name: './/h3[@title="name"]',
};

export class CartItem extends Component {

    public async remove(): Promise<void> {
        await this.element.clickByXpath(SELECTORS.removeButton);
    }

    public async getSubtotal(): Promise<number> {
        const [subtotal] = await this.element.waitForXpath(SELECTORS.subtotal);
        const textSubtotal = subtotal.textContent.replace('Subtotal: $', '');
        return Number(textSubtotal);
    }

    public async getName(): Promise<string> {
        const [name] = await this.element.waitForXpath(SELECTORS.name);
        return name.textContent;
    }
}
