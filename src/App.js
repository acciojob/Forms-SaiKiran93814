import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form from "./pages/Form";
import FormRef from "./pages/FormRef";
import FormState from "./pages/FormState";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link id="form-link" to="/">Form Layout</Link></li>
          <li><Link id="form-ref-link" to="/form-ref">Form with useRef</Link></li>
          <li><Link id="form-state-link" to="/form-state">Form with useState</Link></li>
        </ul>
      </nav>

      {/* Replace Routes with Switch */}
      <Switch>
        <Route exact path="/" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </Switch>
    </Router>
  );
}

export default App;
