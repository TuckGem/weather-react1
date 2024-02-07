import "./App.css";
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>{`Weather App`}</h1>
          <Search />
          <Weather city="paris" />
        </header>
        
      </div>
    </div>
  );
}

export default App;
