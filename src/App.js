import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import MainContent from './Pages/MainContent/MainContent';
import './index.css';
import { useEffect } from 'react';

const App = () => {
  
  const [page, setPage] = useState(window.localStorage.getItem('page') || 0);

  useEffect(() => {
    window.localStorage.setItem('page', JSON.stringify(page));
  }, [page]);

  const updatePage = (newPage) => {
    setPage(newPage);
  };

  const clickForm = () => {
    setPage(1);
  }
  
  return (
    <div>
      <Navbar updatePage={updatePage} />
      <MainContent page={page} clickForm={clickForm}/>
    </div>
  );
} 

export default App;
