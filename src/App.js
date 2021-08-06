import AppContainer from "./AppContainer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import BookPage from "./BookPage";
import AuthorPage from "./AuthorPage";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route exact path="/books/:id" render={() => <BookPage />} />
          <Route exact path="/authors/:id" render={() => <AuthorPage />} />
        </Switch>
        <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
