import "./App.css";
import AppContainer from "./AppContainer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <HomePage />
      </AppContainer>
    </div>
  );
}

export default App;
