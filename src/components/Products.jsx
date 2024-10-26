import Product from "./Product";
import PropTypes from 'prop-types';

const Products = ({products, setCartNumber}) => {
  

  return (
    <div className="px-[0.5rem] mt-20">
      <h1 className="mb-5 text-xl font-semibold">Available Products</h1>
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <Product setCartNumber={setCartNumber} key={product.id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  setCartNumber: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
}

export default Products;
