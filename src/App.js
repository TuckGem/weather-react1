import "./App.css";
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weahter App</h1>
        <Search />

        <Weather city="paris" />
      </header>
    </div>
  );
}

export default App;
