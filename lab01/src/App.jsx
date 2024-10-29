import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Lab1 from './components/Lab1';
import Lab2 from './components/Lab2';
import Home from './components/Home';
import './App.css';

const App = () => {
    const menuItems = [
      {   id: 1, 
          label: "Home",
          path: "/",
          urlPattern: "/",
          element: <Home></Home>,
      },
      { 
          id: 2, 
          label: "Labolatorium1",
          path: "/lab1",
          urlPattern: "/lab1",
          element: <Lab1></Lab1>,
      },
      { id: 3, 
          label: "Labolatorium2",
          path: "/lab2",
          urlPattern: "/lab2",
          element: <Lab2></Lab2>,
      }
  ];
  

  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          <Route path="/lab1" element={<Lab1 />} />
          <Route path="/lab2" element={<Lab2 />} />
          <Route path="/" element={<Home />} />
        </Routes>
          <p>content</p>
      </RootLayout>
    </>
  );
};

export default App;