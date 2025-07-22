import MyContextWrapper from "./Context/MyContextWrapper"
import Home from "./Pages/Home"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./Pages/AddUser";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import EditUser from "./Pages/EditUser";


function App() {
  return (
    <BrowserRouter>

      <MyContextWrapper>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser" element={<EditUser />} />
        </Routes>

      </MyContextWrapper>
      <ToastContainer />
    </BrowserRouter>


  )
}

export default App