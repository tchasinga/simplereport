import { useEffect, useState } from "react";
import GetLoading from "../Changes/Loading";

function Apping() {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://edamam-food-and-grocery-database.p.rapidapi.com/api/food-database/v2/parser?nutrition-type=cooking&category%5B0%5D=generic-foods&health%5B0%5D=alcohol-free";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "9b3d7bf98dmsh86533329ca8a247p1aa238jsn88181f108eb1",
          "X-RapidAPI-Host": "edamam-food-and-grocery-database.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        setData(result);
        setIsPending(false);
      } catch (error) {
        console.error(error);
      }
    };

    setTimeout(fetchData, 3000);
  }, []);

  return (
    <div className="Apping">
      {isPending && <GetLoading/>}
    {data &&
      data.hints.map((item) => (
        <div>
          <img src={item.food.image} alt="" />
          <p>{item.food.category}</p>
          <p>{item.food.foodId}</p>
          <p>{item.food.knownAs}</p>
          <button>Welcom</button>
        </div>
      ))}
  </div>
  );
}

export default Apping;
