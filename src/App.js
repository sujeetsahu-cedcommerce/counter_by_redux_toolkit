// import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { store } from "./Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
