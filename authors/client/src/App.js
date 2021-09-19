import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react';
import ShowAll from './components/ShowAll';
import ShowAuthor from './components/ShowAuthor';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1>Favorite Authors</h1>
        <Switch>
          <Route exact path="/">
            <ShowAll></ShowAll>
          </Route>
          <Route exact path="/new">
            <AuthorForm></AuthorForm>
          </Route>
          <Route exact path="/author/:id">
          <ShowAuthor></ShowAuthor>
          </Route>
          <Route exact path="/author/edit/:id">
            <EditAuthor></EditAuthor>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
