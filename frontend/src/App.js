// import './assets/styles/global.scss';
import { routes } from "./routes.js";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainNav } from "./modules/navigation";

export function App() {
  return (
    <BrowserRouter>
      <section className="flex">
        <MainNav />
        <Switch>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact
              component={route.component}
              path={route.path}
            />
          ))}
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
