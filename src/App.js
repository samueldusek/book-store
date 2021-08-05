import "./App.css";
import AppContainer from "./AppContainer";
import BookList from "./BookList";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <h2>Book Store 📚</h2>
        <BookList />
      </AppContainer>
    </div>
  );
}

export default App;
