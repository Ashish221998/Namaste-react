import { useDispatch } from "react-redux";
import { MENU_ITEM_URL } from "../Utils/Constants";
import { addItem } from "../Utils/cartSlice";
const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleADDItems = (item) => {
    console.log(item);
    dispatch(addItem(item));
  };

  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-2">
                {" "}
                <span className="text-lg font-bold">{item.card.info.name}</span>
                <span className="font-bold">
                  - ₹{" "}
                  {item.card.info.price
                    ? item.card.info.price / 100
                    : item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-xs">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                <button
                  className="p-2 mx-12  rounded-lg bg-black text-white shadow-lg"
                  onClick={() => handleADDItems(item)}
                >
                  ADD +
                </button>
              </div>
              <img
                src={MENU_ITEM_URL + item.card.info.imageId}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ItemList;
