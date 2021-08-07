import AppContainer from "./AppContainer";
import HomePage from "./HomePage";
import BookPage from "./BookPage";
import AuthorPage from "./AuthorPage";
import Page404 from "./Page404";
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
          <Route exact path="/book-store" render={() => <HomePage />} />
          <Route exact path="/books/:id" render={() => <BookPage />} />
          <Route exact path="/authors/:id" render={() => <AuthorPage />} />
          <Route exact path="/*" render={() => <Page404 />} />
        </Switch>
        <Footer />
      </AppContainer>
    </div>
  );
}

export default App;
