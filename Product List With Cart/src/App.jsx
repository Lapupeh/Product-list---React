import { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import ConfirmationModal from './components/ConfirmationModal'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
 // aiiy
  const [confirmationMessage, setConfirmationMessage] = useState('')

  function addToCart(product){
    setCart((prev) => ({
      ...prev, [product.id]: prev[product.id] 
        ? {...prev[product.id], quantity: prev[product.id].quantity + 1}
        : {...product, quantity: 1}
    }))
  }

  function updateQuantity(productId, newQty) {
    setCart(prev=> {
      if(newQty <= 0) {
        const rest = {...prev}
        delete rest[productId]
        return rest;
      }
      return {
        ...prev, [productId]: {...prev[productId], quantity: newQty}
      }
    })
  }

  function removeItem(productId) {
    setCart(prev=> {
      const rest = {...prev}
        delete rest[productId]
        return rest;
    })
  }

  function confirmOrder() {
    setIsLoading(true)

    setTimeout(()=> {
      setIsLoading(false)
      setShowModal(true)
      setConfirmationMessage("Order Confirmed, We hope you enjoy your food")
    }, 2000);
    
  }

  function newOrder() {
    setShowModal(false);
    setCart([]);
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <main>
      <ProductList 
      cart={cart}
      addToCart={addToCart}
      updateQuantity={updateQuantity}
      />
      <Cart 
      cart={cart}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
      confirmOrder={confirmOrder}
      isLoading={isLoading}
      />
      {showModal && <ConfirmationModal
      cart={cart}
      newOrder={newOrder}
      confirmationMessage={confirmationMessage}
      />}
    </main>
     
  )
}

export default App
