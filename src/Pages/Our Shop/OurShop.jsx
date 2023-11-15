import { useLocation } from "react-router-dom";
import CoverTitle from "../../Components/Shared/CoverTitle";
import TabBaseManu from "../../Components/Tab Base Manu/TabBaseManu";

import image from "../../assets/shop/banner2.jpg";

const OurShop = () => {
  const location = useLocation();

  return (
    <>
      {/* cover ... */}
      <CoverTitle
        img={image}
        title={"OUR SHOP"}
        details={"Would you like to try a dish?"}
        hight={true}
      ></CoverTitle>

      {/* tab base data */}
      <TabBaseManu category={location?.state}></TabBaseManu>
    </>
  );
};

export default OurShop;
