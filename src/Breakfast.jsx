export default function (props) {
  let Options = {};

  if (props.type === "all") {
    Options = props.items.map((item, index) => {
      return (
        <div key={index} className="food-container">
          <div className="img-container">
            <img src={item.img} alt="" />
          </div>
          <div className="desc-container">
            <h2>{item.title}</h2> <div className="price">${item.price}</div>
            <p>{item.desc}</p>
          </div>
        </div>
      );
    });
  } else {
    Options = props.items.map((item, index) => {
      if (item.category === props.type) {
        return (
          <div key={index} className="food-container">
            <div className="img-container">
              <img src={item.img} alt="" />
            </div>
            <div className="desc-container">
              <h2>{item.title}</h2>
              <div className="price">${item.price}</div>
              <p>{item.desc}</p>
            </div>
          </div>
        );
      }
    });
  }

  return <div className="breakfast-container">{Options}</div>;
}
