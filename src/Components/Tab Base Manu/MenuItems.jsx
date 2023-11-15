import Container from "../Shared/Container";
import Card from "./Card";

const ManuItems = ({ data }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-between gap-5 lg:gap-10 font-inter px-5 lg:px-0">
        {data?.map((data) => (
          <Card key={data._id} data={data}></Card>
        ))}
      </div>
    </Container>
  );
};

export default ManuItems;
