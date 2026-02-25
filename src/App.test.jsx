import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Integration - Full Screen Interaction', () => {

    test('Clicking "Add to Cart" updates the cart section appropriately', async () => {
        // Initialize the user-event setup to simulate real user interactions
        const user = userEvent.setup();

        // 1. Arrange: Render the entire application
        render(<App />);

        // Primary Check: Cart should initially show 0 items and no Confirm Order button
        expect(screen.getByText('Your Cart (0)')).toBeInTheDocument();
        expect(screen.queryByText('Confirm Order')).not.toBeInTheDocument();

        // 2. Act: Simulate user action
        // Find the first "Add to Cart" button among all products rendered
        const allAddButtons = screen.getAllByRole('button', { name: /Add to Cart/i });
        const firstAddToCartButton = allAddButtons[0];

        // Simulate a real mouse click
        await user.click(firstAddToCartButton);

        // 3. Assert: Verify the outcome
        // The cart header should now display 1 item
        const updatedCartHeader = await screen.findByText('Your Cart (1)');
        expect(updatedCartHeader).toBeInTheDocument();

        // Verify the "Confirm Order" button is now visible, confirming cart interaction
        const confirmButton = screen.getByRole('button', { name: /Confirm Order/i });
        expect(confirmButton).toBeInTheDocument();
    });

});
