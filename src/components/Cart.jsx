export default function Cart({ cartItems, removeFromCart, onConfirmOrder }) {
    const totalQuantity = cartItems.reduce((total, item) => item.quantity + total, 0)
    const totalPrice = cartItems.reduce((total, item) => item.price * item.quantity + total, 0)

    return (
        <>
            <div className="cart-container">
                <h2>Your Cart ({totalQuantity})</h2>
                {cartItems.length === 0 ? (
                    <div className="empty-cart">
                        <img src="/assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
                        <p>Your added items will appear here</p>
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.name} className="cart-item">
                            <div className="item-details">
                                <p className="name">{item.name}</p>
                                <div className="price-details">
                                    <span className="quantity">{item.quantity}x</span>
                                    <span className="price"> @ ${item.price.toFixed(2)}</span>
                                    <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            </div>
                            <button className="btn-remove" onClick={() => removeFromCart(item.name)}>
                                <img src="/assets/images/icon-remove-item.svg" alt="Remove item" />
                            </button>
                        </div>
                    ))
                )}

                {cartItems.length > 0 && (
                    <div className="cart-footer">
                        <div className="order-total">
                            <span className="order-total-label">Order Total</span>
                            <span className="total-amount">${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="carbon-neutral">
                            <img src="/assets/images/icon-carbon-neutral.svg" alt="eco-icon" />
                            <span>This is a <strong>carbon-neutral</strong> delivery</span>
                        </div>
                        <button className="btn-confirm" onClick={onConfirmOrder}>Confirm Order</button>
                    </div>
                )}
            </div>

        </>
    )
}
