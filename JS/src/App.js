import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from './Home';
import Images from './Images';
import About from './About';
import Layout from './/components/Layout';

function App() {
  return (
    <div className="App">

        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="images" element={<Images />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
