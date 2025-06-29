import Goods from "./Goods";

function ShopingList({ Goods }) {
if (Goods.length === 0) {
  return  <p>Список покупок пуст</p>
};
else {
    return(
    <ul>
        {Goods.map((goods, index) => {
            return <Goods key={index} goods={goods} />
        })}
    </ul>
); 
} 
}
export default ShopingList;