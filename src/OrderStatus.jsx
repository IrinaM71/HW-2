function OrderStatus({ orderID, status }) {
  if ((orderID = [])) {
    return <p>Нет заказов</p>;
  } else {
    return (
      <p>
        Заказ #{orderId}: {status}
      </p>
    );
  }
}

export default OrderStatus;
