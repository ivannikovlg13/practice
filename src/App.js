import './App.css';
import Header from './components/header/header';
import Navbar from './components/navbar/navbar';
import Content from './components/content/content'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}

export default App;
