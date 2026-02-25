import { test, expect } from '@playwright/test';

test('E2E Scenario: Add to Cart and Confirm Order', async ({ page }) => {
    // 1. Navigate to the homepage
    await page.goto('/');
    await expect(page).toHaveTitle(/Frontend Mentor/i);

    // 2. Verify that the cart is initially empty
    await expect(page.locator('.cart-container')).toContainText('Your Cart (0)');
    await expect(page.getByRole('button', { name: 'Confirm Order' })).not.toBeVisible();

    // 3. Click the first "Add to Cart" button on the page
    const firstAddBtn = page.getByRole('button', { name: 'Add to Cart' }).first();
    await firstAddBtn.click();

    // 4. Expect the button to change into a quantity selector (+ / -)
    const plusBtn = page.locator('.btn-active .icon-plus').first();
    await expect(plusBtn).toBeVisible();

    // Click the "+" button to increment the quantity
    await plusBtn.click();

    // 5. Verify the cart summary updates correctly
    await expect(page.locator('.cart-container')).toContainText('Your Cart (2)');

    // 6. Click the "Confirm Order" button
    const confirmBtn = page.getByRole('button', { name: 'Confirm Order' });
    await confirmBtn.click();

    // 7. Verify the Order Confirmation Modal is visible
    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();
    await expect(modal).toContainText('Order Confirmed');

    // Click "Start New Order" to reset the state
    const startNewBtn = modal.getByRole('button', { name: 'Start New Order' });
    await startNewBtn.click();

    // 8. Verify the modal closes and the cart is reset to 0
    await expect(modal).not.toBeVisible();
    await expect(page.locator('.cart-container')).toContainText('Your Cart (0)');
});
