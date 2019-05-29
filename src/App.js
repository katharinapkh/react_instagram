import React from 'react';
import Header from './components/header';
import Feed from "./components/feed";
import Profile from "./components/profile";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
       <Router>
           <div className="App">
               <Header/>
               <Route path='/' component={Feed} exact/>
               <Route path='/profile' component={Profile} exact/>
           </div>
       </Router>
    );
}
/*exact- добавляет только то что нам нужно, а не то что присвоено слешу + слово после слеша (/profile)*/

export default App;