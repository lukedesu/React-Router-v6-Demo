import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import MyProfile from "./MyProfile";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/myprofile" element={<ProtectedRoute />}>
            <Route index element={<MyProfile />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
