export default function OrderConfirmationModal({ cartItems, onStartNewOrder }) {
    const totalPrice = cartItems.reduce((total, item) => item.price * item.quantity + total, 0);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src="/assets/images/icon-order-confirmed.svg" alt="Order Confirmed" className="confirm-icon" />
                <h2>Order Confirmed</h2>
                <p className="subtitle">We hope you enjoy your food!</p>

                <div className="order-summary">
                    {cartItems.map(item => (
                        <div key={item.name} className="summary-item">
                            <div className="summary-item-left">
                                <img src={item.image.thumbnail} alt={item.name} className="thumbnail" />
                                <div className="summary-details">
                                    <p className="name">{item.name}</p>
                                    <div className="price-details">
                                        <span className="quantity">{item.quantity}x</span>
                                        <span className="price"> @ ${item.price.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    ))}
                    <div className="summary-total">
                        <span className="summary-total-label">Order Total</span>
                        <span className="summary-total-amount">${totalPrice.toFixed(2)}</span>
                    </div>
                </div>

                <button className="btn-confirm" onClick={onStartNewOrder}>Start New Order</button>
            </div>
        </div>
    )
}
