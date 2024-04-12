import { FC } from "react";
import {
  Button,
  ControlsWrapper,
  ItemBlock,
  NameWrapper,
  PriceWrapper,
  RatingWrapper,
  Wrapper,
} from "./components/index";
import star from "../../assets/star.jpg";
import styles from "./item.module.css";

interface ItemProps {
  img: string;
  name: string;
  price: number;
  oldPrice: number;
  rating: number;
}

const Item: FC<ItemProps> = ({ img, name, price, oldPrice, rating }) => {
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
              <Button>Купить</Button>
            </PriceWrapper>
          </ControlsWrapper>
        </div>
      </Wrapper>
    </ItemBlock>
  );
};

export default Item;
