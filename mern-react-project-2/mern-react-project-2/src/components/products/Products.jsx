import Product from './Product'
import Classes from './Products.module.css'

const Products = ({products}) => {
  return (
    <div className={Classes.container}>
        {products.map(product => (
            <Product key={product.id} item={product} />
        ))}
    </div>
  )
}

export default Products