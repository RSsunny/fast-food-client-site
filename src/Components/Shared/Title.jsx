const Title = ({ title, subTitle }) => {
  return (
    <div className=" text-center mt-20 mb-10">
      <h1 className="font-inter text-yellow-500 ">----{title}----</h1>
      <h2 className="text-3xl font-medium font-inter border-y-2 W-[600px] py-3 mt-5 inline-block px-10">
        {subTitle}
      </h2>
    </div>
  );
};

export default Title;
