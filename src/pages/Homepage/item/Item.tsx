import { FC } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Button,
  ControlsWrapper,
  ItemBlock,
  NameWrapper,
  PriceWrapper,
  RatingWrapper,
  Wrapper,
} from "./components/index";
import star from '../../../assets/star.jpg'
import styles from "./item.module.css";
import { addItemToCart } from "../../..";
import { useDispatch } from "react-redux";

interface ItemProps {
  index: number;
  img: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
}

const Item: FC<ItemProps> = ({ index, img, name, price, oldPrice, rating }) => {
  const dispatch = useDispatch();

  const addItem = () => {
    const item = {
      index,
      img,
      name,
      price,
      oldPrice,
      rating,
      count: 1
    }
    dispatch(addItemToCart(item));
  }

  return (
    <ItemBlock>
      <Wrapper>
        <div className={styles.image}>
          <img src={img} alt="item image" />
        </div>
        <div className={styles.content}>
          <ControlsWrapper>
            <NameWrapper>
              <h1 className={styles.title}>{name}</h1>
              <RatingWrapper>
                <img src={star} alt="star" width={25} />
                <p>{rating}</p>
              </RatingWrapper>
            </NameWrapper>

            <PriceWrapper>
              <p className={styles.price}>
                {price} $
              </p>
              <p className={styles.oldPrice}>{oldPrice} $</p>
              <Button onClick={addItem}>Купить</Button>
            </PriceWrapper>
          </ControlsWrapper>
        </div>
      </Wrapper>
    </ItemBlock>
  );
};

export default Item;
