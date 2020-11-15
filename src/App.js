import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import ImageSlider from './component/ImageSlider';
import NewsBoard from './component/NewsBoard';
import Location from './component/Location';

function App() {
  
  
  return (
    <div className="App">
     <Header />
     <ImageSlider/>
     <NewsBoard />
     <Location />
     <Footer />
    </div>
  );
}

export default App;
