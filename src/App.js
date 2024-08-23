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
      <main className=''>
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
