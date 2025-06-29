import "./App.css";
import Greeting from "./Greeting";
import ShopingList from "./ShopingList";

function App() {
  const goods = ["Хлеб", "Молоко", "Сыр", "Веник"];
  return (
    <>
      <Greeting name="Ирина" />
      <h2>Мой список покупок</h2>
      <ShopingList goods={goods} />
    </>
  );
}

export default App;
