const ProductCard = ({ product }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{product.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
