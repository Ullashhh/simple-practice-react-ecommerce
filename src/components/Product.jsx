import PropTypes from "prop-types";

const Product = ({ product, setCartNumber }) => {
    const {availabilityStatus, category, description, discountPercentage, meta, price, rating, returnPolicy, shippingInformation, title, thumbnail, warrantyInformation, stock, sku, id} = product;
  return (
    <div className="card glass w-96">
      <figure>
        <img src={thumbnail} />
      </figure>
      <div className="card-body space-y-0 text-sm">
        <h2 className="card-title">{title}</h2>
        <h2>
          Category: {category.slice(0, 1).toUpperCase() + category.slice(1)}
        </h2>
        <p>{description}</p>
        <p>Stock: {stock}</p>
        <p>SKU: {sku}</p>
        <p>Price: ${price}</p>
        <p>Available: {availabilityStatus}</p>
        <p>Discount: {discountPercentage}%</p>
        <p>Rating: {rating}</p>
        <p>Warranty: {warrantyInformation}</p>
        <p>Shipping: {shippingInformation}</p>
        <p>Return Policy: {returnPolicy}</p>
        <div className="flex items-center">
          <p>QR Scan: </p>
          <img className="w-8" src={meta.qrCode} alt="" />
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => setCartNumber(id)} className="btn btn-ghost">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  setCartNumber: PropTypes.func.isRequired,
};

export default Product;
