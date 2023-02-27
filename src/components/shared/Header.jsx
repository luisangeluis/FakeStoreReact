//Dependencies
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Slices
import { getCategories } from '../../store/slices/categories.slice';
import { setShowModalCart } from '../../store/slices/showModalCart.slice';
//Components
import { NavLink } from 'react-router-dom';
import AsideCart from './AsideCart';

const Header = () => {
  const categories = useSelector((state) => state.categories);
  const showModalCart = useSelector((state) => state.showModalCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  console.log(categories);
  const handleClickModalCart = () => {
    dispatch(setShowModalCart(true));
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Fake Store Api
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-around"
            id="navbarSupportedContent"
          >
            <select
              className="categories-select form-select my-3 my-md-1 w-md-25"
              aria-label="Default select example"
            >
              {categories.map((category, i) =>
                i === 0 ? (
                  <option defaultValue key={i}>
                    {category}
                  </option>
                ) : (
                  <option key={i}>{category}</option>
                )
              )}
            </select>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link btn" onClick={handleClickModalCart}>
                  Cart <i className="fa-solid fa-cart-shopping"></i>
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link btn" onClick={handleClickModalCart}>
                  Login <i className="fa-solid fa-user"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showModalCart && <AsideCart />}
    </>
  );
};

export default Header;
