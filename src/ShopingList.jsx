import Goods from "./Goods";

function ShopingList({ goods }) {
  if (goods.length === 0) {
    return <p>Список покупок пуст</p>;
  }

  return (
    <ul>
      {goods.map((goods, index) => (
        <li key={index}>{goods}</li>
      ))}
    </ul>
  );
}

export default ShopingList;
