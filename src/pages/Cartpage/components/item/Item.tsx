import deleteIcon from "../../../../assets/delete.jpg";
import minus from "../../../../assets/minus.jpg";
import plus from "../../../../assets/plus.jpg";
import { Card, Controls, Button } from "./components/index";
import styles from "./item.module.css";
import { IItem, addCount, removeCount, removeItemAll } from "../../../..";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";

interface IItemProps {
  item: IItem
}

const Item: FC<IItemProps> = ({ item }) => {
  const dispatch = useDispatch()

  const addCountHandle = () => {
    dispatch(addCount(item.index));
    console.log(item.count)
  }

  const reduceCountHandle = () => {
    dispatch(removeCount(item.index))
  }

  const removeItemAllHandle = () => {
    dispatch(removeItemAll(item.index))
  }

  return (
    <Card>
      <div>
        <img src={item.img} alt={item.name} width={146} />
        <Controls>
          <Button onClick={reduceCountHandle}><img src={minus} alt=""/></Button>
          <p>{item.count}</p>
          <Button onClick={addCountHandle}><img src={plus} alt="" /></Button>
        </Controls>
      </div>

      <div className={styles.middleBlock}>
        <h1>{item.name}</h1>
        <p>{item.price}</p>
      </div>

      <div className={styles.lastblock}>
        <Button onClick={removeItemAllHandle}>
          <img src={deleteIcon} alt="" width={25} height={25}/>
        </Button>
        
        <p>{item.price} $</p>
      </div>
    </Card>
  )
}

export default Item;