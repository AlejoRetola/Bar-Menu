export default function (props) {
  return (
    <section className="selection">
      <div className="title">
        <h1>Our Menu</h1>
        <div className="underline"></div>
      </div>
      <div className="buttons">
        <button className="filter-btn" id="all" onClick={props.toggle}>
          All
        </button>
        <button className="filter-btn" onClick={props.toggle} id="breakfast">
          Breakfast
        </button>
        <button className="filter-btn" id="lunch" onClick={props.toggle}>
          Lunch
        </button>
        <button className="filter-btn" id="shakes" onClick={props.toggle}>
          Shakes
        </button>
      </div>
    </section>
  );
}
