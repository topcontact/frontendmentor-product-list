import { useState } from 'react'
import data from './data.json'
import ProductList from './components/ProductList'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import OrderConfirmationModal from './components/OrderConfirmationModal'


function App() {
    console.log(data)
    const [cartItems, setCartItems] = useState([])
    const addtoCart = (product) => {
        console.log("Adding to cart", product)
    }
    return (
        <>
            <main>
                <h1>Desserts</h1>
                {/* Product List will go here */}
                <ProductList>
                    {data.map((item) => (
                        <ProductCard key={item.name} item={item} addToCart={addtoCart} />
                    ))}
                </ProductList>
                {/* Cart will go here */}
                <Cart cartItems={cartItems} />
                {/* Order Confirmation Modal will go here */}
                <OrderConfirmationModal />
            </main>
        </>
    )
}

export default App
