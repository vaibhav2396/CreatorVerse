import { BrowserRouter, Route, Routes } from "react-router-dom"
import ShowCreators from "./pages/ShowCreators"
import EditCreator from "./pages/EditCreator"
import AddCreator from "./pages/AddCreator"
import ViewCreator from "./pages/ViewCreator"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShowCreators/>} />
          <Route path="/edit/:id" Component={EditCreator} />
          <Route path="/add" Component={AddCreator} />
          <Route path="/view/:id" Component={ViewCreator} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
