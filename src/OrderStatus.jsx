//function OrderStatus({ order }) {
//if ((order = [])) {
//return <p>Нет заказов</p>;
//}

const OrderStatus = ({ orderId, status }) => {
  return (
    <p>
      Заказ #{orderId}: {status}
    </p>
  );
};
//}

export default OrderStatus;
