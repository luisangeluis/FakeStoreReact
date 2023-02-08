import axios from 'axios';
//Components
import { useEffect, useState } from 'react';
import Hero from '../main/Hero';
import ProductCard from '../ProductCard';

const Home = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  const getProducts = () => {
    const baseUrl = 'https://fakestoreapi.com';
    axios
      .get(`${baseUrl}/products`)
      // .get(`${baseUrl}/products`)
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <section className="home">
      <div className="container">
        <Hero />
        <section className="row">
          {products?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Home;
