import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Login, Navigation, Home, ImagenDetail, MyImage } from "@/pages";
import { useAuthStore } from "@/store";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/img/:id",
    element: <ImagenDetail />,
  },
  {
    path: "/myimg",
    element: <MyImage />,
  },
];

export const ApiRouter = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              isLoggedIn ? (
                <>
                  <Navigation />
                  {route.element}
                  <Outlet />
                </>
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        ))}

        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};
