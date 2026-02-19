export default function Cart({ cartItems }) {
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

    return (
        <div className="cart-container">
            <h2>Your Cart ({totalQuantity})</h2>

            {cartItems.length === 0 ? (
                <p>Your added items will appear here</p>
            ) : (
                <ul>
                    {/* Cart Items */}
                </ul>
            )}
        </div>
    )
}
