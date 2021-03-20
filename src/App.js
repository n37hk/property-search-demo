import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import {HomeLogin, HomeSignup} from './components/pages/Home';
import MyAccount from './components/pages/MyAccount';
import Search from './components/pages/Search';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/en/login"/>}/>
          <Route path="/en/login" exact render={() => <HomeLogin language="en"/>}/>
          <Route path="/al/login" exact render={() => <HomeLogin language="al"/>}/>
          <Route path="/en/signup" exact render={() => <HomeSignup language="en"/>}/>
          <Route path="/al/signup" exact render={() => <HomeSignup language="al"/>}/>
          <Route path="/en/myaccount" exact render={() => <MyAccount language="en"/>}/>
          <Route path="/al/myaccount" exact render={() => <MyAccount language="al"/>}/>
          <Route path="/en/search" exact render={() => <Search language="en"/>}/>
          <Route path="/al/search" exact render={() => <Search language="al"/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
