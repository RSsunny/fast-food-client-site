const CardList = ({ data }) => {
  const { _id, name, recipe, image, category, price } = data;
  return (
    <div className="flex items-center gap-5 ">
      <img
        src={image}
        alt=""
        className="rounded-r-[200px] rounded-b-[200px] w-[100px]"
      />
      <div className="flex-1">
        <h1>{name}-------------</h1>
        <p>{recipe}</p>
      </div>
      <h2>${price}</h2>
    </div>
  );
};

export default CardList;
