import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
/*import manifest from '../public/manifest'
import main from '../build/static/js/main'*/
import Test from './components/Test'


function App() {
  const test = "App test"
  return (
    <div className={test}>
      <Search/>
      <Test/>
    </div>
  );
}

export default App;
