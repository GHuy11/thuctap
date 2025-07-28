import './App.css'
import { Routes, Route } from "react-router-dom";
import { MainLayout } from './layout';
import Home from './pages/Home';
import { publicRoutes } from './routes';
import { Fragment } from 'react/jsx-runtime';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {publicRoutes.map((route, index) => {
          const Component = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              element={<Component />}
            />
          );
        })}
      </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
