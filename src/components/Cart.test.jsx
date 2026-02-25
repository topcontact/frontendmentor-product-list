import { render, screen } from '@testing-library/react';
import Cart from './Cart';

// "describe" defines a Test Suite
describe('Cart Component - Testing Pricing and Quantities', () => {

    // "test" (or "it") defines an individual Test Case
    test('Should display empty cart illustration when no items are passed', () => {

        // 1. Arrange: Setup the test environment and mock data (an empty cart)
        const mockCartItems = [];

        // 2. Act: Render the Cart component onto the virtual DOM
        render(<Cart cartItems={mockCartItems} removeFromCart={() => { }} />);

        // 3. Assert: Verify the expected outcome
        // We expect to see this specific empty state message
        const emptyMessage = screen.getByText('Your added items will appear here');
        expect(emptyMessage).toBeInTheDocument();
    });

    test('Should calculate correct total price (totalPrice) for 2 different items', () => {

        // 1. Arrange: Prepare a cart with items (e.g., 2 Waffles and 1 Mocha)
        const mockCartItems = [
            { name: 'Waffle', price: 6.5, quantity: 2 }, // 13.0
            { name: 'Mocha', price: 5.0, quantity: 1 }   // 5.0 
        ];
        // Expected total price is $18.00

        // 2. Act: Render the virtual screen
        render(<Cart cartItems={mockCartItems} removeFromCart={() => { }} />);

        // 3. Assert: Look for the text '$18.00' to appear in the total section
        const totalAmountText = screen.getByText('$18.00');
        expect(totalAmountText).toBeInTheDocument();
    });

});
