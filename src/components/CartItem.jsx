
function CartItem({ item, removeItem }) {
    return (
        <div className="added-items">
            <div className="added-item-info">
                <p>{item.name}</p>
                <div className="price-qty">
                    <span className="qty">{item.quantity}x</span>
                    <span className="price-per1">@{item.price}</span>
                    <span className="item-total-price">${(item.price * item.quantity)}</span>
                </div>
            </div>
            <button className="remove-item" 
            aria-label={`Remove ${item.name}`} 
            onClick={()=> removeItem(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path className="remove-icon" fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
            </button>
        </div>
    )   
}

export default CartItem