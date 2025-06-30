import "./App.css";
import Greeting from "./Greeting";
import ShopingList from "./ShopingList";
import OrderStatus from "./OrderStatus";

function App() {
  const goods = ["Хлеб", "Молоко", "Сыр", "Веник"];
  const orders = [
    { orderId: 122, status: "обработан" },
    { orderId: 123, status: "в пути" },
    { orderId: 124, status: "доставлен" },
  ];
  return (
    <>
      <Greeting name="Ирина" />
      <h2>Мой список покупок</h2>
      <ShopingList goods={goods} />
      <h2>Статусы заказов</h2>

      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          ordersId={order.orderId}
          status={order.status}
        />
      ))}
    </>
  );
}

export default App;
