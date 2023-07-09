/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';

export class Wizard extends Component {
    protected LOCATORS = {
        prescriptionBtn: this.locator.locator(
            '//div[@role="button" and contains(., "Non-prescription")]'
        ),
        continueBtn: this.locator.locator('//button[contains(., "Continue")]'),
        backBtn: this.locator.locator('//button[text() = "Back"]'),
        valueFreeBtn: this.locator.locator('//div[@role="button" and contains(., "Value")]'),
        clearBtn: this.locator.locator('//div[@role="button" and contains(., "Clear")]'),
        noThanksBtn: this.locator.locator('//button[contains(., "No Thanks")]'),
        addToCartBtn: this.locator.locator('//button[contains(., "Add to Cart")]'),
    };

    public async prescriptionClick(): Promise<void> {
        await this.LOCATORS.prescriptionBtn.waitFor();
        await this.LOCATORS.prescriptionBtn.click();
    }
    public async valueFreeClick(): Promise<void> {
        await this.LOCATORS.valueFreeBtn.waitFor();
        await this.LOCATORS.valueFreeBtn.click();
    }

    public async clearClick(): Promise<void> {
        await this.LOCATORS.clearBtn.waitFor();
        await this.LOCATORS.clearBtn.click();
    }
    public async continueClick(): Promise<void> {
        await this.LOCATORS.continueBtn.click();
    }

    public async noThanksClick(): Promise<void> {
        await this.LOCATORS.noThanksBtn.click();
    }
    public async addToCartClick(): Promise<void> {
        await this.LOCATORS.addToCartBtn.click();
    }
}
