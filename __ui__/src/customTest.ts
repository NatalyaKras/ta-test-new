/* eslint-disable prettier/prettier */
import { CartPage } from '@Pages/cartPage';
import { CategoryPage } from '@Pages/categoryPage';
import { CheckoutPage } from '@Pages/checkoutPage';
import { ProductPage } from '@Pages/productPage';
import { ThankYouPage } from '@Pages/thankYouPage';
import { test as base, expect } from '@playwright/test';
import { DataLayer } from '@Utils/dataLayer';

// Добавить недоставющие страницы в фикстуры и типы

type Options = {
    dataLayer: DataLayer;
    categoryPage: CategoryPage;
    productPage: ProductPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    thankYouPage: ThankYouPage;
};
const test = base.extend<Options>({
    dataLayer: async ({ page }, use) => {
        await use(new DataLayer(page));
    },
    categoryPage: async ({ page }, use) => {
        await use(new CategoryPage(page));
    },
    productPage: async ({ page }, use) => {
        await use(new ProductPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({ page }, use) => {
        await use(new CheckoutPage(page));
    },
    thankYouPage: async ({ page }, use) => {
        await use(new ThankYouPage(page));
    },
});

export { test, expect };
