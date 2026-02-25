export default function ProductCard({ item, addToCart, quantity, removeFromCart }) {
    return (
        <>
            <li className="product-card">
                {/* Image */}
                <div className="image-container">
                    <img src={item.image.desktop} alt={item.name} />
                    {quantity > 0 ? (

                        <button className="btn-active">
                            <span className="icon-minus" onClick={() => removeFromCart(item.name)}>-</span>
                            <span className="quantity-text">{quantity}</span>
                            <span className="icon-plus" onClick={() => addToCart(item)}>+</span>
                        </button>
                    ) :
                        <button className="btn-add" onClick={() => addToCart(item)}>
                            <img src="/assets/images/icon-add-to-cart.svg" alt="" aria-hidden="true" />
                            Add to Cart
                        </button>
                    }
                </div>

                {/* Info */}
                <div className="product-info">
                    <span className="category">{item.category}</span>
                    <h2 className="name">{item.name}</h2>
                    <span className="price">${item.price.toFixed(2)}</span>
                </div>
            </li>
        </>
    )
}
