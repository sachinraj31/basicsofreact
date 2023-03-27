function ExpenseItem(props) {
  const LocationOfexpenditure = Hotel;
  return (
    <div>
      <h2>Epense Item</h2>
      <h2>Foods Rs 10</h2>
      <h2>Petrol Rs 100</h2>
      <h2>Movies Rs 200</h2>
      <h2>{props.title}</h2>
      <h2>{props.date}</h2>
      <div className="locaton">{LocationOfexpenditure}</div>
    </div>
  );
}

export default ExpenseItem;
