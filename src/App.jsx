import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";


function App() {
  function handleClick() {
    alert("button clicked");
  }

  const handleClick2 = () => {
    alert("button 2 Clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>Core Concepts of React-2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>
      
      {/* event handler*/}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Again</button>
      {/* more tricky but sufficient */}
      <button
        onClick={() => {
          alert("THird Clicked");
        }}
      >
        Third
      </button>
      <button onClick={() => addToFive(3)}>Four</button>
    </>
  );
}

export default App;
