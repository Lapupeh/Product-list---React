import { useEffect } from "react";

function ConfirmationModal({ cart, newOrder, confirmationMessage }) {
    const cartItems = Object.values(cart)
    const totalValue = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  useEffect(()=> {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [])

    return ( 
      <div className="overlay">
        <div aria-live="assertive" aria-atomic="true" className='sr-only'>{confirmationMessage}</div>
        <div className="confirmation-modal">
            <div className="modal-content">
            <div className="title-info">
              <img src="/images/icon-order-confirmed.svg" alt="check-icon"/>
              <h3>Order Confirmed</h3>
              <p>We hope you enjoy your food!</p>
            </div>
            <div className="confirmed-items">
                    {cartItems.map((item) => (
              <div key={item.id}className="confirmed-item">
                      <div className="item"> 
                        <img src={item.image.thumbnail} alt="" />
                        <div className="item-information">
                            <p>{item.name}</p>
                          <div className="price-qty">
                            <span className="qty">{item.quantity}x</span>
                            <span className="price-per1">@ ${item.price}</span>
                            </div>
                          </div>
                        </div>
                          <span className="item-total-price">${item.quantity * item.price}</span>
                    </div>
                    )
                    )}
              <div className="order-total">
                <h3>Order Total</h3>
                <div>
                  <span>$</span>
                  <span className="order-summary-price">{totalValue}</span>
                </div>
              </div>
            </div>
            <button className="new-order" onClick={newOrder}>Start new order</button>
        </div>
       </div>
      </div>
    )
}
export default ConfirmationModal
