import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Layout from "./Layout"
import HomePage from "./components/homepage"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import About from "./pages/About"
import ProductDetails from "./pages/ProductDetails"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import OrderSuccess from "./pages/OrderSuccess"
import Contactus from "./pages/Contact"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
  path: "about",
  element: <About />,
},
 { path: "Contact", 
  element: < Contactus /> 
},
{
  path: "product",
  element: <ProductDetails />,
},
{
  path: "cart",
  element: <Cart />,
},
{
  path: "checkout",
  element: <Checkout/>,
},
{
  path: "order-success",
  element: <OrderSuccess />,
},

    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
