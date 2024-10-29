import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Lab1 from './components/Lab1';
import Lab2 from './components/lab2';
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
          path: "/lab2/:id",
          urlPattern: "/lab2:id",
          element: <Lab2></Lab2>,
      }
  ];
  

  return (
    <>
      <RootLayout items={menuItems}>
        <Routes>
          {menuItems.map(item => (
            <Route
              key={item.id}
              path={item.path} 
              element={item.element} 
             />
          ))}
        </Routes>
      </RootLayout>
    </>
  );
};

export default App;