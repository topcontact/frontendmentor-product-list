export default function ProductCard({ item, addToCart, quantity, removeFromCart }) {
    return (
        <>
            <div className="product-card">
                {/* Image */}
                <div className="image-container">
                    <img src={item.image.desktop} alt={item.name} />
                    {quantity > 0 ? (

                        <button className="btn-active">
                            <span className="icon-minus" onClick={() => removeFromCart(item.name)}>-</span>
                            <span classname="quntity-text">{quantity}</span>
                            <span className="icon-plus" onClick={() => addToCart(item)}>+</span>
                        </button>
                    ) :
                        <button className="btn-add" onClick={() => addToCart(item)}>
                            <span className="icon-plus"></span>
                            Add to Cart
                        </button>
                    }
                </div>

                {/* Info */}
                <div className="product-info">
                    <p className="category">{item.category}</p>
                    <h2 className="name">{item.name}</h2>
                    <p className="price">${item.price.toFixed(2)}</p>
                </div>
            </div>
        </>
    )
}
