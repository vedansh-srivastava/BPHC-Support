import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Header from "./components/Header/Header";
import Main from "./components/Page/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgotpassword">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Header />
            <Main/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
