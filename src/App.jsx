import { useState } from 'react'
import data from './data.json'
import ProductList from './components/ProductList'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import OrderConfirmationModal from './components/OrderConfirmationModal'


function App() {
    console.log(data)
    const [cartItems, setCartItems] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    const addtoCart = (product) => {
        const exsitingItem = cartItems.find((item) => item.name === product.name);
        if (exsitingItem) {
            setCartItems((prevCartItems) =>
                prevCartItems.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            )
        } else {
            setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }])
        }
    }
    const removeFromCart = (productName) => {
        setCartItems((prevCartItems) => {
            // Find the item in the cart first
            const existingItem = prevCartItems.find(item => item.name === productName);

            // If there's only 1 left and the user clicks '-', use .filter to remove it from the array entirely
            if (existingItem.quantity === 1) {
                return prevCartItems.filter(item => item.name !== productName);
            }

            // If there's more than 1 left, use .map to decrement the quantity (- 1)
            return prevCartItems.map(item =>
                item.name === productName
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        });
    };

    const confirmOrder = () => {
        setIsModalOpen(true);
    }

    const startNewOrder = () => {
        setCartItems([]);
        setIsModalOpen(false);
    }

    return (
        <>
            {/* Main wrapper containing both left and right sections */}
            <main className="app-container">

                {/* ------ Left Section (Product List) ------ */}
                <div className="product-section">
                    <h1>Desserts</h1>
                    <ProductList>
                        {data.map((item) => {
                            const itemInCart = cartItems.find((cartItem) => cartItem.name === item.name)
                            const quantity = itemInCart ? itemInCart.quantity : 0

                            return (
                                <ProductCard
                                    key={item.name}
                                    item={item}
                                    addToCart={addtoCart}
                                    quantity={quantity}
                                    removeFromCart={removeFromCart}
                                />
                            )
                        })}
                    </ProductList>
                </div>

                {/* ------ Right Section (Cart) ------ */}
                <div className="cart-section">
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} onConfirmOrder={confirmOrder} />
                </div>

                {isModalOpen && (
                    <OrderConfirmationModal
                        cartItems={cartItems}
                        onStartNewOrder={startNewOrder}
                    />
                )}
            </main>
        </>
    )

}

export default App
