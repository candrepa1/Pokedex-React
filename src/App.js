import React from 'react';
import {HashRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './styles/main.css';
import Filters from './components/Filters';
import ExtraPoke from './components/ExtraPoke';
import Encounters from './components/Encounters';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Logout from './components/Logout';
import WelcomeMessage from './components/WelcomeMessage';
import { useAuth } from './components/provider/AuthProvider.js';

function App() {
  const { user } = useAuth();

  return (
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
              {user.user ? <Redirect to="/pokedex"/> : <Login />}
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
