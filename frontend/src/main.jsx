import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/index.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { store } from './store/store';
import { attachAxiosAuthInterceptor } from './constants/contents/MainContent';

attachAxiosAuthInterceptor(store);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
