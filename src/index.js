import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tripdetails from './pages/Trip-details-and-invite';
import SingleVacation from "./pages/Single_Vacation"
import Activetrips from './pages/Active-trips'
import reportWebVitals from './reportWebVitals';
import ContextProvider from './contexts/app_context';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Footer from './components/footer';
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />
  },
  {
    path: "/tripdetails",
    element: <Tripdetails />
  },
  {
    path: "/single/:id",
    element: <SingleVacation  />
  },
  {
    path: "/activetrips",
    element: <Activetrips  />
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router}/>
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
