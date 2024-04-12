import './App.css';
import Header from './components/header/Header';
import ItemsBlock from './components/itemsBlock/ItemsBlock';
import Footer from './components/footer/Footer';
import { items1, items2 } from './items';


function App() {
  return (
    <div className='body'>
      <div className="container">
        <Header />

        <ItemsBlock headerText={"Наушники"} items={items1} />

        <ItemsBlock headerText={"Наушники"} items={items2} />

        <div style={{display: "flex", justifyContent: "center"}}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
