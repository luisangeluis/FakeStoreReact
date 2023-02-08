//Dependencies
import { useDispatch } from 'react-redux';
//Slices
import { setShowModalCart } from '../../store/slices/showModalCart.slice';

const AsideCart = () => {
  const dispatch = useDispatch();

  return (
    <section className="aside-cart position-fixed bg-dark">
      <div className="container text-white">
        <button
          className="btn btn-outline-secondary"
          onClick={() => dispatch(setShowModalCart(false))}
        >
          <i className="fa-sharp fa-solid fa-circle-xmark"></i>
        </button>
        <h2>Cart</h2>
      </div>
    </section>
  );
};

export default AsideCart;
