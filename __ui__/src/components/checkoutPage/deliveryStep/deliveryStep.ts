/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';

export class DeliveryStep extends Component {

    protected LOCATORS = {
        ContinueBtn: this.page.locator('//button[contains(., "Continue")]'),
    };

    public async clickContinue(): Promise<void> {
        await this.LOCATORS.ContinueBtn.click();
    }

}
