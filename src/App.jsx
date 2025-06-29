import "./App.css";
import Greeting from "./Greeting";
import ShopingList from "./ShopingList";

function App() {
  const goods = ["Хлеб", "Молоко", "Сыр", "Веник"];
  return (
    <>
      <Greeting name="Ирина" />
      <ShopingList Goods={goods} />
    </>
  );
}

export default App;
