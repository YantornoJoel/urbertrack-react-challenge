import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { Login, Navigation, Home, ImagenDetail, MyImage } from "@/pages";
import { useAuthStore } from "@/store";

export const ApiRouter = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <>
                <Navigation />
                <Home />
                <Outlet />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path={"/img/:id"}
          element={
            isLoggedIn ? (
              <>
                <Navigation /> <ImagenDetail /> <Outlet />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path={"/myimg"}
          element={
            isLoggedIn ? (
              <>
                <Navigation /> <MyImage /> <Outlet />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
};
