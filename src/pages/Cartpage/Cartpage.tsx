import Item from "./components/item/Item";
import PriceControl from "./components/priceControl/PriceControl";
import styles from "./cartpage.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../..";

const Cartpage = ({}) => {
  const items = useSelector((state: RootState) => state.items);

  return (
    <div className={styles.cartblock}>
      <h1 className={styles.title}>Корзина</h1>
      <div className={styles.wrapper}>
        <div className={styles.itemList}>
          {items.map((item) => <Item item={item} key={item.index} /> )}
        </div>
        <div></div>
        <PriceControl />
      </div>
    </div>
  )
}

export default Cartpage;