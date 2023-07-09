/* eslint-disable prettier/prettier */
import { Component } from '@Core/component';

export class Form extends Component {

    protected LOCATORS = {
        inputFirstName: this.locator.locator('[id="input-1"]'),
        inputLastName: this.locator.locator('[id="input-2"]'),
        inputEmail: this.locator.locator('[id="input-3"]'),
        inputPhone: this.locator.locator('[id="input-4"]'),
        inputAddress: this.locator.locator('[id="input-5"]'),
        inputZip: this.locator.locator('[id="input-9"]'),
    };

    public async fill(): Promise<void> {
        await this.LOCATORS.inputFirstName.fill('Ivan');
        await this.LOCATORS.inputLastName.fill('Ivanov');
        await this.LOCATORS.inputEmail.fill('i.ivanov@gmail.com');
        await this.LOCATORS.inputPhone.fill('8989898');
        await this.LOCATORS.inputAddress.type('17 17 Mile Drive');
        await this.LOCATORS.inputAddress.click();
        await this.LOCATORS.inputAddress.press('ArrowDown');
        await this.LOCATORS.inputAddress.press('Enter')
        await this.LOCATORS.inputZip.fill('93950');
        }
    
    }

