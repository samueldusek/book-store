import AppContainer from "./AppContainer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
        </Switch>
        <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
