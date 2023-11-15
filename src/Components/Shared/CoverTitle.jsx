import Container from "./Container";

const CoverTitle = ({ img, title, details, hight }) => {
  return (
    <Container>
      <div
        className={`object-cover bg-center flex justify-center items-center text-white ${
          hight ? "h-[600px] " : " h-[500px]"
        }`}
        style={{ backgroundImage: `url("${img}")` }}
      >
        <div className="w-3/4 mx-auto p-20 bg-black bg-opacity-50 text-center">
          <h1 className="text-3xl font-cinzel font-bold ">{title}</h1>
          <p className="font-inter mt-3">{details}</p>
        </div>
      </div>
    </Container>
  );
};

export default CoverTitle;
