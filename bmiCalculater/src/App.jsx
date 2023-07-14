import "./App.css";
import { useState } from "react";
const App = () => {
  //mking state for input from the user to manupilate the dom API
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  //logic for the APP
  const calBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please enter valid height and weight");
    } else {
      // Formula to calculate BMI
      const currentBmi = (weight / (height * height)) * 703;
      setBmi(currentBmi);

      if (currentBmi <= 25) {
        setMessage("You are underweight");
      } else if (currentBmi >= 25 && currentBmi < 30) {
        setMessage("You are at a healthy weight");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="container">
        <div className="sub-container">
          <h2>BMI calculater</h2>
          <form className="bmiForm" onSubmit={calBmi}>
            <div className="weight-heigh">
              <label htmlFor="">Weight (lbs)</label>
              <input
                type="text"
                placeholder="Enter weight value"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="weight-heigh">
              <label htmlFor="">Height (In)</label>
              <input
                type="number"
                placeholder="Enter Height value"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="btn">
              <button type="submit" className="btn">
                Submit
              </button>
              <button
                type="submit"
                className="btn btn-outline"
                onClick={reload}
              >
                Reload
              </button>
            </div>
            <div className="center">
              <h3>Your BMI is:{bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default App;
