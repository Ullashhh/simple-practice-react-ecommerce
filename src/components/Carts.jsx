import Cart from "./Cart";
import PropTypes from "prop-types";

const Carts = ({ cartItems, removeProduct }) => {
  const grandTotal = cartItems.map(
    (item) => item.price - (item.price * item.discountPercentage) / 100
  );
  const finalTotal = grandTotal.reduce((a, b) => a + b, 0);
  const finalValue = finalTotal.toFixed(2);
  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
      {cartItems.length < 1 ? (
        <h2 className="font-semibold text-xl">Yet to add any products...</h2>
      ) : (
        <div className="space-y-3">
          {cartItems.map((item, idx) => (
            <Cart removeProduct={removeProduct} key={idx} item={item}></Cart>
          ))}
        </div>
      )}
      {cartItems.length < 1 ? (
        ""
      ) : (
        <h2 className="text-xl font-semibold mt-10">
          Grand Total: ${finalValue}
        </h2>
      )}
    </div>
  );
};

Carts.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default Carts;
