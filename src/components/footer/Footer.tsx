import vk from "../../assets/vk.jpg";
import tg from "../../assets/tg.jpg";
import wt from "../../assets/wt.jpg";
import { FooterWrapper, IconsWrapper, Wrapper } from './components/index'

const Footer = ({}) => {

  return (
    <FooterWrapper>
      <Wrapper>
        <h1>QPICK</h1>
        <div>
          <p>Избранное</p>
          <p>Корзина</p>
          <p>Контакты</p>
        </div>
        <div>
          <p>Условия сервиса</p>
        </div>
        <IconsWrapper>
          <img src={vk} alt="vk" />
          <img src={tg} alt="tg" />
          <img src={wt} alt="wt" />
        </IconsWrapper>
      </Wrapper>
    </FooterWrapper>
  )
}

export default Footer;