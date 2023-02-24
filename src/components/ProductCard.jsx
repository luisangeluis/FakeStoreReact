const ProductCard = ({ product }) => {
  return (
    <div className="col-md-6 col-lg-4 col-xl-3 mb-1 mb-lg-2">
      <div className="card p-1 p-md-2 mx-auto border-0">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body p-1">
          <h3 className="card-title fs-5 text-primary-emphasis">
            {product.title}
          </h3>
          <h3 className="card-text fs-5 text-secondary">{`Price $${product.price}`}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
