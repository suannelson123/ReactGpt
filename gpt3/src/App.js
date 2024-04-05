import './App.css';
import {Footer, Blog, Features, Header, Possibility, WhatGpt3} from './containers/ExportContainer'
import {Cta, Brand, Navbar} from './components/Export';

function App() {
  return (
    <div className="App">
     <div className='gradient__bg'>
     <Navbar/>
     <Header/>
     </div>
     <Brand/>
     <WhatGpt3/>
     <Features/>
     <Possibility/>
     <Cta/>
     <Blog/>
     <Footer/>
    </div>

  );
}

export default App;
