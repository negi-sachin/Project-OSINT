import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewScan from "./pages/NewScan/NewScan";
import Layout from "./components/Layout/Layout";
import SuccessMessage from "./components/NewScan/SuccessMessage";

function App() {
  const isTokenAvailable = sessionStorage.getItem("accessToken");
  function WithLayout(Component) {
    return <Layout>{<Component />}</Layout>;
  }
  return (
    <BrowserRouter>
      <Routes>
        {!isTokenAvailable ? (
          <Route path="*" element={<Login />} />
        ) : (
          <>
            <Route path="dashboard" element={WithLayout(Dashboard)} />
            <Route path="new-scan" element={WithLayout(NewScan)} />
            <Route
              path="new-scan/success"
              element={WithLayout(SuccessMessage)}
            />
            <Route path="*" element={WithLayout(Dashboard)} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
