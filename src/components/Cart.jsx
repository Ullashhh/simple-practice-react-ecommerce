import PropTypes from "prop-types";

const Cart = ({ item, removeProduct }) => {
  console.log(item);
  const disCountPrice = item.price - ((item.price * item.discountPercentage) / 100).toFixed(3);
  return (
    <div className="border-slate-500 border-b-2 p-2">
      <div className="flex items-center gap-5">
        <img className="w-20 h-28" src={item.thumbnail} alt="" />
        <div className="text-xs">
          <h3>{item.title.slice(0,20).concat('...')}</h3>
          <p>Price: ${item.price}</p>
          <p>Discount: {item.discountPercentage}%</p>
          <p>Cost: ${disCountPrice}</p>
          <button
            onClick={() => removeProduct(item.id)}
            className="btn btn-xs btn-error mt-1"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

Cart.propTypes = {
  item: PropTypes.object.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default Cart;
