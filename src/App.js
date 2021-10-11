import logo from './logo.svg';
import './App.css';
import MainApp from './Component/MainApp';
import Update from './Component/Update';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Route path="/" component={MainApp} /> */}

      <MainApp/>
      <Route exact path="/update" component={Update} />

    </>
  );
}

export default App;
