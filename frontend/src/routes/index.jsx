import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import FeatureProduct from '../components/FeatureProduct';
import AdminRoute from './adminRoute';
import AdminDashboard from '../pages/admin/AdminDashboard';
import SingleProductPage from '@/components/Product/SingleProductPage';
import CategoryPage from '@/components/CategoryPage';
import Cart from '@/pages/CartPage';
import Checkout from '@/pages/Checkout';
import ROUTE_PATHS from '@/config/routePaths';

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
