import favourite from "../../assets/favourite.jpg";
import basket from "../../assets/basket.jpg";
import { Wrapper, IconsWrapper } from './components/index';
import { Link } from "react-router-dom";
import styles from "./header.module.css";

const Header = ({}) => {
  return (
    <header>
      <Wrapper>
        <Link to={"/"} className={styles.headerLogo}>
          <h1>QPICK</h1>
        </Link>
        <IconsWrapper>
          <img src={favourite} alt="favourite" width={30} />
          <Link to={"/item"}><img src={basket} alt="basket" width={30} /></Link>
          
        </IconsWrapper>
      </Wrapper>
    </header>
  )
}

export default Header;