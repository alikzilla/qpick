import { FC } from "react";
import Item from "../item/Item";
import { v4 as uuidv4 } from 'uuid';
import { Container, HeaderText, Wrapper } from './components/index'
import { ItemProps } from "../../../items";

interface IItemsBlockProps {
  headerText: string,
  items: ItemProps[],
}

const ItemsBlock: FC<IItemsBlockProps> = ({ headerText, items }) => {
  return (
    <Container>
      <HeaderText>{headerText}</HeaderText>
      <Wrapper>
        {items.map((item) => (
          <Item
            key={uuidv4()}
            index={item.index}
            img={item.img}
            name={item.name}
            price={item.price}
            oldPrice={item.oldPrice}
            rating={item.rating}
          />
        ))}
      </Wrapper>
    </Container>
  );
};


export default ItemsBlock;