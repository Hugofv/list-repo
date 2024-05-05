import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Repo from '../templates/Repo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Repo />,
  },
]);

const App: React.FC = () => <RouterProvider router={router} />;

export default App;
