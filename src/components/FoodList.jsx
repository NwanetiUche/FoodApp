import FoodItem from "./FoodItem";
import styles from "./FoodList.module.css";
export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      <div className={styles.fooditem}>
        {" "}
        {foodData.map((food) => (
          <FoodItem setFoodId={setFoodId} key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}
