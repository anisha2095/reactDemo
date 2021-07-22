import logo from './logo.svg';
import './App.css';
import { Navbar } from './Component/Navbar';
import  Carousel  from './Component/Carousel';
import Cakes from './Component/Cakes';
import LoginSignup from './Component/LoginSignup';


function App() {

  let cake1={
    name:"pineapple",
    price:500,
    imgSrc:"pineapple.jpg"
  }
  let cake2={
    name:"Chocolate",
    price:500,
    imgSrc:"chocolate.jpg"
  }
  let cake3={
    name:"Vanilla",
    price:500,
    imgSrc:"vanilla.jpg"
  }
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-3">
            <Cakes data={cake1} />
          </div>
          <div className="col-md-3">
            <Cakes data={cake2} />
          </div>
          <div className="col-md-3">
            <Cakes data={cake3} />
          </div>
        </div>
      </div>
      <LoginSignup />
    </div>
  );
}

export default App;
