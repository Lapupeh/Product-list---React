import clsx from "clsx";

function ProductCard({ product, inCart, addToCart, updateQuantity, quantity }) {

    return (
        <li>
            <div className='item-image-cart'>
            <picture>
                <source 
                    media='(min-width: 1024px)'
                    srcSet={product.image.desktop}
                    />
                <source 
                    media='(min-width: 768px)'
                    srcSet={product.image.tablet}
                    />
                <img 
                    src={product.image.mobile}
                    alt={product.name}
                    className={clsx("product-image", {border: inCart} ) }
                    />
            </picture>
            { !inCart ? ( 
        <button className="add-to-cart" 
        aria-label={`${product.name}, $${product.price}, add to cart`}
        onClick={()=> addToCart(product)}>
                <img 
                src="/images/icon-add-to-cart.svg" alt="Add-to-cart-icon" />
                <p>Add to cart</p>
            </button> ) : (
                <div className="product-counter">
                    <button className="decrement" aria-label="minus 1" onClick={()=> updateQuantity(product.id, quantity - 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path className="dec-sign" fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
                    </button>
                    <span className="quantity-count">{quantity}</span>
                    <button className="increment" aria-label="plus 1" onClick={()=> updateQuantity(product.id, quantity + 1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path className="inc-sign"fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
                    </button>
                </div>
            )}
            </div>
            <div className='item-info'>
                <span>{product.category}</span>
                <h2>{product.name}</h2>
                <p>$ {product.price}</p>
            </div>
        </li>
    )
}

export default ProductCard