
import './App.css';
import AllAuthors from './components/AllAuthors';
import NewAuthorForm from './components/NewAuthorForm';
import EditAuthorForm from './components/EditAuthorForm';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <BrowserRouter>
      <div className="App container">
        <h1> Favorite Authors </h1>
        <Link className = "btn btn-primary" to ="/">Home</Link>
        <Link className = "btn btn-primary" to ="/new">Create Author</Link>
        <hr />
        <Switch>
          <Route exact path= "/">
            <AllAuthors></AllAuthors>
          </Route>
          <Route exact path = "/new">
            <NewAuthorForm formSubmitted = {formSubmitted} setFormSubmitted= {setFormSubmitted} ></NewAuthorForm>
          </Route>
          <Route exact path = "/edit/:id">
            <EditAuthorForm></EditAuthorForm>
          </Route>
        </Switch>
      </div>
    
    </BrowserRouter>
  );
}

export default App;
