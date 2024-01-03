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
      <footer>
        <a href="https://github.com/sobPare/weagher-react">github linked</a>
      </footer>
    </div>
  );
}

export default App;
