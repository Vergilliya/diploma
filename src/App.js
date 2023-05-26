import { useState } from 'react';
import Navbar from './Components/navbar/Navbar';
import MainContent from './Pages/MainContent/MainContent';
import Footer from './Components/footer/Footer';
import './index.css';

const App = () => {
  
  const [page, setPage] = useState(0);

  const updatePage = (newPage) => {
    setPage(newPage);
  };
  
  return (
    <div>
      <Navbar updatePage={updatePage} />
      <MainContent page={page} />
      <Footer />
    </div>
  );
} 

export default App;
