import { Route, Routes } from 'react-router-dom';
import './App.css';
//Components
import Home from './components/pages/Home';
import MainLayout from './components/shared/MainLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/products/category/:categoryName"
            element={<h2>Category name</h2>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
