import pic from "./images/image-equilibrium.jpg";
import av from "./images/image-avatar.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={pic} className="pic" />
      <h3>Equlibrium #4872</h3>
      <p id="lorem">Our Equilibrium collection promotes balance and calm.</p>
      <div id="float">
        <span id="eth">&#11030; 0.041 ETH</span>
        <span id="left">&#128337; 3 days left</span>
      </div>
      <Bot name="Jules Wyvern" />
    </div>
  );
}

function Bot(props) {
  //props aris object, e can write {name} parametrad
  return (
    <div id="botom">
      <img src={av} />
      <span>
        created by <b>{props.name}</b>
      </span>
    </div>
  );
}

export default App;
