export default function ProductCard({ item, addToCart }) {
    return (
        <div className="product-card">
            {/* Image */}
            <div className="image-container">
                <img src={item.image.desktop} alt={item.name} />
                <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>

            {/* Info */}
            <div className="product-info">
                <p className="category">{item.category}</p>
                <h2 className="name">{item.name}</h2>
                <p className="price">${item.price.toFixed(2)}</p>
            </div>
        </div>
    )
}
