import './App.scss';
import MainPage from './components/main/MainPage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (<>
    <div className="wrapper">
        <Navbar/>

        <div className="main">
            <MainPage/>
        </div>
    </div>
  </>
  );
}

export default App;
