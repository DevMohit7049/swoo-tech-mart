import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/ecommerce/Home';
import Products from '../components/ecommerce/Products';
import Login from '@/components/auth/Login';
import Register from '@/components/auth/Register';
import Contact from '../components/pages/Contact';
import FeatureProduct from '../components/UI/FeatureProduct';
import AdminRoute from './adminRoute';
import AdminDashboard from '@/screens/layout/AdminDashboard';
import SingleProductPage from '@/components/Product/SingleProductPage';
import CategoryPage from '@/components/UI/CategoryPage';
import Cart from '@/components/ecommerce/CartPage';
import Checkout from '@/components/ecommerce/Checkout';
import ROUTE_PATHS from '@/constants/Routes';
import About from '@/components/pages/About/About';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.ROOT,
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: { crumb: "home" }
      },
      {
        path: ROUTE_PATHS.SHOP,
        element: <Products />,
        handle: { crumb: "shop" }
      },
      {
        path: ROUTE_PATHS.PRODUCT_DETAILS,
        element: <SingleProductPage />
      },
      {
        path: ROUTE_PATHS.CATEGORY,
        element: <CategoryPage />
      },
      {
        path: ROUTE_PATHS.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTE_PATHS.REGISTER,
        element: <Register />
      },
      {
        path: ROUTE_PATHS.CONTACT,
        element: <Contact />
      },
      {
        path:ROUTE_PATHS.ABOUT,
        element:<About/>
      },
      {
        path: ROUTE_PATHS.CART,
        element:<Cart/>
      },
      {
        path: ROUTE_PATHS.CHECKOUT,
        element: <Checkout />
      },
      
      {
        path: ROUTE_PATHS.ADMIN,
        element: <AdminRoute />,
        children: [
          {
            path: ROUTE_PATHS.ADMIN_DASHBOARD,
            element: <AdminDashboard />
          }
        ]
      }
    ]
  }
]);
