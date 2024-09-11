import { useEffect, useState } from "react";
import ItemList from "./itemList";
import styles from "./FoodDetails.module.css";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "914da185664341fbb26e7b5255efe218";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.Container}>
        <div className={styles.foodtitle}>
          {" "}
          <h1>{food.title}</h1>
          <img className={styles.itemImage} src={food.image} alt="" />
          <div>
            <span>
              <strong>⏲{food.readyInMinutes}Minutes</strong>
            </span>
            <span>
              👪<strong>Serves{food.servings}</strong>
            </span>
            <span>🍖{food.vegetarian ? "Vegetarian" : "Non-Vegetarian"}</span>{" "}
            <span>{food.vegan ? "🐮Vegan" : " "}</span>
          </div>
          <div>
            <span>$ {food.pricePerServing / 100} Per Serving</span>
          </div>
        </div>
        <div>
          <h2>Ingredients</h2>
          <div className={styles.Ingredients}>
            <ItemList food={food} isLoading={isLoading} />
          </div>
        </div>
        <div>
          <h2>Instructions</h2>
          <div>
            <ol>
              {isLoading ? (
                <p>Loading....</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.step}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
