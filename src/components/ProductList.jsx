import ProductCard from './ProductCard'
import products from '../data.json'

function ProductList({ cart, addToCart, updateQuantity }) {
    return (
        <section className='products-header'>
            <h1>Desserts</h1>
            <ul className='products-list'>
                {products.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    inCart={!!cart[product.id]}
                    addToCart={addToCart}
                    updateQuantity={updateQuantity}
                    quantity={cart[product.id]?.quantity || 0}/>
                ))}
            </ul>
        </section>
    )
}

export default ProductList