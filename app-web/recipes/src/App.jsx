import { useState } from 'react'
import './App.css'
import Detail from './pages/detail';
import List from './pages/list';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
]);

function App() {
  return (
    <div className=''>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
