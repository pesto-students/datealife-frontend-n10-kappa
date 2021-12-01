import "./App.css";
import { Routes, Route } from "react-router-dom";
import routes from "./routes";

const App = (): JSX.Element => {
    return (
        <Routes>
            {routes.map((route, routeIndex) => {
                return <Route path={route.pathname} element={<route.component key={routeIndex}/>} key={route.pathname} />;
            })}
        </Routes>
    );
};

export default App;
