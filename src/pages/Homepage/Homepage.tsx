import ItemsBlock from "./itemsBlock/ItemsBlock";
import { items1, items2 } from "../../items";

const Homepage = ({}) => {
  return (
    <div>
      <ItemsBlock headerText={"Наушники"} items={items1} />
      <ItemsBlock headerText={"Наушники"} items={items2} />
    </div>
  );
};

export default Homepage;
