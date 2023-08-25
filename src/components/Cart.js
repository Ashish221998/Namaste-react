import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearcart } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearcart());
  };
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center p-5 m-5">
      <h1 className=" font-bold text-lg ">Cart</h1>
      <div className="w-6/12 m-auto shadow-lg">
        <button
          className="p-2 m-2 bg-white text-black rounded-lg shadow-lg text-center"
          onClick={handleClearCart}
        >
          Clearcart
        </button>
        {cartItems.length === 0 && (
          <h1 className="text-lg">
            Your cart looks empty! please proceed to Add items.
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};
export default Cart;
