export default function Cart({ cartItems, removeFromCart }) {
    const totalQuantity = cartItems.reduce((total, item) => item.quantity + total, 0)
    const totalPrice = cartItems.reduce((total, item) => item.price * item.quantity + total, 0)

    return (
        <>
            <div className="cart-container">
                <h2>Your Cart ({totalQuantity})</h2>
                {cartItems.length === 0 ? (
                    <p>Your added items will appear here</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.name}>
                            <p className="name">{item.name}</p>
                            <span className="quantity">{item.quantity}x</span>
                            <span className="price"> @ ${item.price}</span>
                            <span className="total-price">${item.price * item.quantity}</span>
                            <button className="btn-remove" onClick={() => removeFromCart(item.name)}>-</button>
                            <div>
                                <span>Order Total</span>
                                <span>${totalPrice}</span>
                            </div>
                            <div>
                                <img src="../assets/images/icon-carbon-neutral.svg" alt="eco-icon" />
                                <span>This is a catbon-neutral delivery</span>
                            </div>
                            <button className="btn-confirm">Confirm Order</button>
                        </div>

                    ))
                )}
            </div>

        </>
    )
}
