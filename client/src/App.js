import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/pages/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Routes } from './routes/Router';
import {  BrowserRouter as Router } from 'react-router-dom';
//redux
import {Provider} from 'react-redux'
import store from './store'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
