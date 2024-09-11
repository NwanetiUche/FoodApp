import Item from "./Item";
import styles from "./itemlist.module.css";
export default function ItemList({ food, isLoading }) {
  return (
    <div className={styles.itemlist}>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
}
