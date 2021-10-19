import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import TrainersPage from "./Pages/TrainersPage/TrainersPage";
import Footer from "./Pages/Shared/Footer/Footer";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails/ServiceDetails";
import NotFound from "./Pages/NotFound/NotFound";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import About from "./Pages/About/About";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/trainers">
              <TrainersPage></TrainersPage>
            </PrivateRoute>
            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/registration">
              <Registration></Registration>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            {/* not found 404 error page */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
// #91ce6b; 1
// #252625; 2

// #555855; text
