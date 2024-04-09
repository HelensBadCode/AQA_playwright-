import BasePage from "../BasePage.js";

export default class SettingsPage extends BasePage{

    constructor(page) {
        super(page, '/panel/settings');
        this.removeUserBlock = page.locator('.user-settings_form', {hasText: 'Remove account'});
        this.removeUserButton = page.locator('.-remove-account button');

    };

    async removeUserAction(){
        await this.removeUserButton.click();
    }

}