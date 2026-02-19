export default function CartItem({ item }) {
    return (
        <li>
            {/* Name */}
            <div>
                <h4>{item.name}</h4>
                <div className="cart-item-details">
                    <span className="quantity">{item.quantity}x</span>
                    <span className="price">@ ${item.price.toFixed(2)}</span>
                    <span className="total-price">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            </div>
            {/* Remove Button */}
            <button>&times;</button>
        </li>
    )
}
