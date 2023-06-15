const calculationView = (props) => {
  const [{ name, price }] = props.data;

  console.log("props in childApp", props);

  let totalNumber = 0;
  props.data.map((data) => (totalNumber += data.price));

  return (
    <div>
      <p>
        Total number of add {props.data.length} and Total Price
        {totalNumber}
      </p>
    </div>
  );
};
export default calculationView;
