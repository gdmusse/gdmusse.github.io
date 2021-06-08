import { 
  Home,
  MatchesPage
} from "./pages"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/matches" exact component={MatchesPage} />
      </Switch>
    </Router>
  );
};

export default App;
