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
            // หาของในตะกร้าก่อน
            const existingItem = prevCartItems.find(item => item.name === productName);

            // กรณีที่เหลือแค่ 1 ชิ้น แล้วโดนกดลบอีก -> ต้องใช้ .filter เพื่อเตะมันออกจาก Array
            if (existingItem.quantity === 1) {
                return prevCartItems.filter(item => item.name !== productName);
            }

            // กรณีที่ยังมีมากกว่า 1 ชิ้น -> ใช้ .map เหมือนตอนบวก แต่แค่เปลี่ยนเป็นลบ (- 1)
            return prevCartItems.map(item =>
                item.name === productName
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        });
    };
    return (
        <>
            {/* กล่องใหญ่สุด คลุมทั้งซ้ายและขวา */}
            <main className="app-container">

                {/* ------ ก้อนฝั่งซ้าย (สินค้า) ------ */}
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

                {/* ------ ก้อนฝั่งขวา (ตะกร้า) ------ */}
                <div className="cart-section">
                    <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
                </div>

                <OrderConfirmationModal />
            </main>
        </>
    )

}

export default App
