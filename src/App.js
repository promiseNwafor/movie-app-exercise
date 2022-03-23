import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./views/routes";

function App() {
  return (
    <Router>
      <AppRoute />
    </Router>
  );
}

export default App;
