//import logo from './logo.svg';
import './css/App.css';
import './css/props.css';
import iconSet from './uiux/selection.json';
import IcomoonReact, { iconList } from "icomoon-react";

//display 
import Header from './screens/header';
import Sidebar from './screens/sidebar';
import Homepage from './screens/home';

function App() {
  return (
    <div className="App flex">
        <Sidebar/>
        <Homepage/>
    </div>
  );
}

export default App;
