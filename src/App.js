import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route/Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='md:px-20 ' style={{backgroundClor: "#FEFEFE"}} >
       <RouterProvider router={router} />
       <Toaster />
    </div>
  );
}

export default App;
