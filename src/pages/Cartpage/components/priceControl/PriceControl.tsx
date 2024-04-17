import { Card, Button, Content } from "./components/index";
import { RootState } from "../../../..";
import { useSelector } from "react-redux";
 
const PriceControl = ({}) => {
  const items = useSelector((state: RootState) => state.items);

  const total = items.reduce((prevVal, curVal) => prevVal += curVal.count * curVal.price, 0)

  return (
    <Card>
      <Content>
        <p>ИТОГО</p>
        <p>{total} $</p>  
      </Content>
      <Button>Перейти к оформлению</Button>
    </Card>
  )
}

export default PriceControl;