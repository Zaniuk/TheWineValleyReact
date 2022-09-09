import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Product from "./components/Product"
function App() {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/product/:id" element={<Layout />}>
        <Route index element={<Product />} />
      </Route>
    </Routes>
  )
}

export default App
