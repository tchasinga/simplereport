import { useEffect, useState } from "react";
import GetLoading from "../Changes/Loading";
import Maindisplayer from "../Code/Maindisplayer";

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
      <Maindisplayer data={data} webtiltle = 'Welcom in food Api'/> 
  </div>
  );
}

export default Apping;
