const displayingdata = ({data , webtiltle}) => {
  return(
    <div className="blog-list">
        <h3>{webtiltle}</h3>
          {data &&
        data.hints.map((item) => (
          <div className="MakeGridSystem" key={item.id}>
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