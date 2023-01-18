import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//Slices
import { getCategories } from '../../store/slices/categories.slice';
//Components
import Hero from '../main/Hero';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <section className="home">
      <div className="container">
        <Hero />
      </div>
    </section>
  );
};

export default Home;
