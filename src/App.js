import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./Home";
import SignIn from "./SignIn";
import MyProfile from "./MyProfile";
import Articles from "./Articles";

import "./App.css";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/myprofile" element={<ProtectedRoute />}>
            <Route index element={<MyProfile />} />
          </Route>
          <Route path="/articles/:id" element={<ProtectedRoute />}>
            <Route index element={<Articles />} />
          </Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
