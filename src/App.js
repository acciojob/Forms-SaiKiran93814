import React from "react"; // ✅ Must be at the top

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form from "./pages/Form";
import FormRef from "./pages/FormRef";
import FormState from "./pages/FormState";

function App() {
  return (
    <Router>
    <nav>
  <ul>
    <li><Link to="/form">Form (use layout only)</Link></li>
    <li><Link to="/form-ref">Form (useRef)</Link></li>
    <li><Link to="/form-state">Form (useState)</Link></li>
  </ul>
</nav>


      {/* Replace Routes with Switch */}
      <Switch>
          <Route path="/form" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </Switch>
    </Router>
  );
}

export default App;
