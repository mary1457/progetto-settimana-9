import 'bootstrap/dist/css/bootstrap.min.css'
import 'boxicons';
import './App.css';
import MyNav from './components/MyNav'
import MyFooter from './components/MyFooter';
import MyCarousel from './components/MyCarousel';
import { Container } from 'react-bootstrap';
import MyHero from './components/MyHero.jsx';
function App() {
  return (
    <div className="App bg-dark">
      <header className="">
      <MyNav></MyNav>
      </header>
      <main className='border border-1 border-end-0 border-start-0 border-black pt-3 pb-3' >
        <Container fluid> 
          <MyHero></MyHero>
          <MyCarousel></MyCarousel>
          </Container>
       
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
