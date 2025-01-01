import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import Other from "./components/Other";



function App() {
  return (
    <BrowserRouter>
      <div className="text-center mt-4">
        <Header />
        <Routes>
          <Route path="/" element={<CardContainer />} />
          <Route path="/other" element={<Other />} />
        </Routes>

      </div>
    </BrowserRouter>
  );

}

export default App;
