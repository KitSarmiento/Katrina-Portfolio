import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import About from './pages/AboutMe';
import Contact from './pages/Contact';


const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,

      children: [
        
        {
          index: true,
          element: <About />,
        },
        {
            path: '/Contact',
            element: <Contact/>,
          },
    ],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );