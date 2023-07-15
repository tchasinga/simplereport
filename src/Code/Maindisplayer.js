const displayingdata = ({data , webtiltle}) => {
  return(
    <div className="blog-list">
        
          {data &&
        data.hints.map((item) => (
          <div className="MakeGridSystem" key={item.food.id}>
            <h3>{webtiltle}</h3>
            <img src={item.food.image} alt="" />
            <p>{item.food.category}</p>
            <p>{item.food.foodId}</p>
            <p>{item.food.knownAs}</p>
            <button>Welcom</button>
          </div>
        ))}
    </div>
  )
}

export default displayingdata;