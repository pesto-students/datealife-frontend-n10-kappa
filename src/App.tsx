import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import routes from "./routes";
import { getIsLoggedIn, getIsExistingUser, getLoggedInUserIdFromLS, updateCurrentPage } from "./store/reducers/login";
import { fetchUserRequest } from "./store/sagas/user/actions";

import "./App.css";

const App = (): JSX.Element => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const loggedInUserId = useSelector(getLoggedInUserIdFromLS);
    const isLoggedIn = useSelector(getIsLoggedIn);
    const isExistingUser = useSelector(getIsExistingUser);

    useEffect(() => {
        //need to find better way instead of hardcoding
        const isNotNumberPage = location.pathname !== "/signup/number";
        const isNotOTPPage = location.pathname !== "/signup/otp";

        if (!loggedInUserId && !isExistingUser && !isLoggedIn && isNotNumberPage && isNotOTPPage) {
            navigate("/login");
        } else if (loggedInUserId && !isLoggedIn) {
            dispatch(fetchUserRequest({ userId: loggedInUserId }));
        }
        dispatch(updateCurrentPage(location.pathname));
    }, [navigate, isExistingUser, isLoggedIn, location]);

    return (
        <Routes>
            {routes.map((route, routeIndex) => {
                return <Route path={route.pathname} element={<route.component key={routeIndex} />} key={route.pathname} />;
            })}
        </Routes>
    );
};

export default App;
