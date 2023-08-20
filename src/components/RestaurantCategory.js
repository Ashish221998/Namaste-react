const RestaurantCategory = ({ data }) => {
  // console.log(data);
  return (
    <div className="flex ">
      <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4 flex justify-between">
        <span className="text-lg font-bold">
          {data.title} - ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
    </div>
  );
};
export default RestaurantCategory;
