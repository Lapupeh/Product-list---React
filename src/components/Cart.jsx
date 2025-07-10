import CartItem from "./CartItem"

function Cart({ cart, removeItem, confirmOrder, isLoading }) {
    const cartItems = Object.values(cart)
    const totalValue = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalQuantity = cartItems.reduce((sum,item) => sum + item.quantity, 0 )
    
    return(
        <aside className="cart">
            <h2>Your Cart (<span className="items-number">{totalQuantity}</span>)</h2>
            {cartItems.length === 0 ? (
            <div className="empty-cart">
                <img src="/images/illustration-empty-cart.svg" alt="Empty cart" />
                <p>Your added items will appear here</p>
            </div>
            ) : (
                <>
                <div>
                    {cartItems.map(item => (
                        <CartItem
                        key={item.id}
                        item={item}
                        removeItem={removeItem}/>
                    ))}
                   
                </div>
                <div className="cart-summary">
                <div className="order-total ">
                  <h3>Order Total</h3>
                  <div>
                    <span>$</span>
                    <span className="order-total-price">{totalValue}</span>
                  </div>
                </div>
                <div className="carbon-neutral-info">
                  <img src="/images/icon-carbon-neutral.svg" alt="carbon-tree"/>
                  <p>This is a <b>carbon-neutral</b> delivery</p>
                </div>
                <button className="checkout-button" 
                disabled={isLoading} 
                aria-label={`Order Total equals ${totalValue}. Confirm Order`}
                onClick={confirmOrder}>
                    {isLoading ? <span className="spinner"></span> : "Confirm Order"}</button>
                </div>
                </>
            )
            }
        </aside>
    )
}

export default Cart