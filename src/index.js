import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Tripdetails from './pages/Trip-details-and-invite';
import Pickvacationspot from './pages/Pick_Vacation_Spot'
import Singlevacation from "./pages/Single_Vacation"
import Activetrips from './pages/Active-trips'
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
const router = createBrowserRouter([
  
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/tripdetails",
    element: <Tripdetails />,
  },
  {
    path: "/pickvacationspot",
    element: <Pickvacationspot />
  },
  {
    path: "/single",
    element: <Singlevacation  />
  },
  {
    path: "/activetrips",
    element: <Activetrips  />
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
