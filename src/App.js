import { Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import { FooterContainer } from './containers/footer'


import Start from './pages/Start';
import Sell from './pages/Sell';
import Market from './pages/Market';
import Manage from './pages/Manage';
import Card from './pages/Card';
import Button from './pages/Button';





function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Routes>
        <Route path="start" element={<Start/>}/>
        <Route path="sell" element={<Sell/>}/>
        <Route path="market/*" element={<Market/>}/>
       
        <Route path="manage" element={<Manage/>}/>
 
      </Routes>
      <Card/>
      <Button/>
      <FooterContainer/>
      </header>
    </div>
  );
}

export default App;





