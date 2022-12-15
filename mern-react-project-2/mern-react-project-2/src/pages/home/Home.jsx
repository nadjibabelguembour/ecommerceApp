import NewSlider from '../../components/slider/NewSlider'
import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Products from '../../components/products/Products';
import Cart from '../../components/Cart/Cart';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [modalOpened, setModalOpened] = useState(false)

    const toggleOpen = () => {
      setModalOpened(prevState => !prevState)
    }


    useEffect(() => {
      const getProducts = async () => {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
  
        const productArray = data.products.map(product => {
          return {
            id: product.id,
            name: product.title,
            price: product.price,
            image: product.images[0]
          }
        })
        setProducts(productArray)
      };
  
      getProducts();
    }, []);
  return (
    <>
        {modalOpened && <Cart onOpenModal={toggleOpen} />}
        <Navbar onOpenModal={toggleOpen} />
        <NewSlider />
        <Products products={products} />
    </>
  )
}

export default Home