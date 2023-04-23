import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import SignIn from "./components/SignIn";
import MyProfile from "./pages/MyProfile";
import Articles from "./pages/Articles";

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
