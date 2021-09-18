// import './assets/styles/global.scss';
import { routes } from "./routes.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route) => (
          <Route
            exact={route.exact}
            key={route.path}
            component={route.component}
            path={route.path}
          />
        ))}
      </Switch>
    </BrowserRouter>

  );
}

export default App;
