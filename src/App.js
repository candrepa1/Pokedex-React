import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './styles/main.css';
import Filters from './components/Filters';
import ExtraPoke from './components/ExtraPoke';
import Encounters from './components/Encounters';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { ProvideAuth } from './components/provider/AuthProvider.js';
import Logout from './components/Logout';
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <ProvideAuth>
      <Router>
        <div className="App p-6 font-mono">
          <div className="flex justify-between items-center mb-2">
            <WelcomeMessage />
            <Logout />
          </div>
          <Switch>
            <ProtectedRoute path="/pokedex/pokemon/:id/encounters">
              <Encounters />
            </ProtectedRoute>
            <ProtectedRoute path="/pokedex/pokemon/:id">
              <ExtraPoke />
            </ProtectedRoute>
            <ProtectedRoute path="/pokedex">
              <Filters />
            </ProtectedRoute>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}

export default App;
