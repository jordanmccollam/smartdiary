import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Screens from './screens';
import { useAuth0 } from '@auth0/auth0-react';
import apis from './api';

function App() {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [ theme, setTheme ] = useState('theme--light');

  useEffect(() => {
    if (user) {
      connectUserToDb();
    }
  }, [user])

  const toggleTheme = () => {
    if (theme === 'theme--dark') {
        setTheme('theme--light');
    } else {
        setTheme('theme--dark');
    }
  }

  const signOut = () => {
    logout();
  }

  const connectUserToDb = () => {
    apis.getUser(user.email).then(res => {
      console.log("connectUserToDb:: res", res);
      if (!res.data.output) {
        createUser();
      }
    }).catch(e => {
      console.error("connectUserToDb", e);
    }) 
  }

  const createUser = () => {
    apis.createUser({email: user.email}).then(res => {
      console.log("createUser:: res", res);
      connectUserToDb();
    }).catch(e => {
      console.error("createUser", e);
    })
  }

  console.log("USER", user);

  return (
    <div className={theme + ' App'}>
      {!user ? (

        <Screens.Welcome.Main signIn={loginWithRedirect} />

      ) : (
        
        <Router>
          <Switch>
            <Route 
              path="/" 
              exact
              render={(props) => <Screens.Diary.Main {...props} theme={theme} toggleTheme={toggleTheme} user={user} signOut={signOut} />} 
            />
          </Switch>
        </Router>

      )}
    </div>
  );
}

export default App;
