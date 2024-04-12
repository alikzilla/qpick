import favourite from "../../assets/favourite.jpg"
import basket from "../../assets/basket.jpg";
import { Wrapper, IconsWrapper } from './components/index'

const Header = ({}) => {
  return (
    <header>
      <Wrapper>
        <h1>QPICK</h1>
        <IconsWrapper>
          <img src={favourite} alt="favourite" width={30} />
          <img src={basket} alt="basket" width={30} />
        </IconsWrapper>
      </Wrapper>
    </header>
  )
}

export default Header;