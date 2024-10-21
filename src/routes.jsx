import App from "./App"
import HomePage from "./HomePage"
import ShopPage from "./ShopPage"
import CartPage from "./CartPage"

const routes = [
    {
        path: "/",
        element: <App />,
    },
    {
        index: true,
        element: <HomePage />,
    },
    {
        path: "shoppage",
        element: <ShopPage />,
    },
    {
        path: "cartpage",
        element: <CartPage />,
    },
];

export default routes