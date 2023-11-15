import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Menu from "../../api/menu";
import ManuCard from "../ManuCard";
import ManuItems from "./MenuItems";

const TabBaseManu = ({ category }) => {
  const [items, setItems] = useState(`${category ? category : "salad"}`);
  const { isLoading, isError, data, error, refetch, isFetching } = Menu(items);

  return (
    <Tabs>
      <TabList className={"mx-auto w-[900px ]  text-center py-20"}>
        <Tab
          onClick={() => setItems("salad")}
          className={
            "inline-block px-4 py-2 focus:bg-transparent focus:text-yellow-500  active:bg-transparent cursor-pointer focus:border-b-yellow-500 font-bold"
          }
        >
          Salad
        </Tab>
        <Tab
          onClick={() => setItems("pizza")}
          className={
            "inline-block px-4 py-2 focus:bg-transparent focus:text-yellow-500  active:bg-transparent cursor-pointer focus:border-b-yellow-500 font-bold"
          }
        >
          Pizza
        </Tab>
        <Tab
          onClick={() => setItems("soup")}
          className={
            "inline-block px-4 py-2 focus:bg-transparent focus:text-yellow-500  active:bg-transparent cursor-pointer focus:border-b-yellow-500 font-bold"
          }
        >
          Soups
        </Tab>
        <Tab
          onClick={() => setItems("dessert")}
          className={
            "inline-block px-4 py-2 focus:bg-transparent focus:text-yellow-500  active:bg-transparent cursor-pointer focus:border-b-yellow-500 font-bold"
          }
        >
          Desserts
        </Tab>
        <Tab
          onClick={() => setItems("drinks")}
          className={
            "inline-block px-4 py-2 focus:bg-transparent focus:text-yellow-500  active:bg-transparent cursor-pointer focus:border-b-yellow-500 font-bold"
          }
        >
          drinks
        </Tab>
      </TabList>

      <TabPanel>
        <ManuItems data={data}></ManuItems>
      </TabPanel>
      <TabPanel>
        <ManuItems data={data}></ManuItems>
      </TabPanel>
      <TabPanel>
        <ManuItems data={data}></ManuItems>
      </TabPanel>
      <TabPanel>
        <ManuItems data={data}></ManuItems>
      </TabPanel>
      <TabPanel>
        <ManuItems data={data}></ManuItems>
      </TabPanel>
    </Tabs>
  );
};

export default TabBaseManu;
