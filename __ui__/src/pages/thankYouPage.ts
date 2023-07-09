/* eslint-disable prettier/prettier */
import { Container } from '@Core/container';

export class ThankYouPage extends Container {
    public async waitEvent(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
}
 