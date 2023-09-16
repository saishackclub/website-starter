import dino from "./dino.svg";
import Counter from "./components/Counter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={dino} className="App-logo" alt="logo" />
        <p className="App-title">More Orpheus goodness coming soon!</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "50px auto",
          }}
        >
          <Counter />
        </div>
      </header>
    </div>
  );
}

export default App;
