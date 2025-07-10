import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Form from "../src/components/Form.js";
import FormRef from "../src/components/FormRef.js";
import FormState from "../src/components/FormState.js";

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Form Sections</h1>
      <nav>
        <ul>
          <li><Link to="/form" id="form-link">Form Layout</Link></li>
          <li><Link to="/form-ref" id="form-ref-link">Form with useRef</Link></li>
          <li><Link to="/form-state" id="form-state-link">Form with useState</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/form" element={<Form />} />
        <Route path="/form-ref" element={<FormRef />} />
        <Route path="/form-state" element={<FormState />} />
      </Routes>
    </div>
  );
}

export default App;
