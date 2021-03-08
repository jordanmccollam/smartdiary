import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Screens from './screens';
import { useAuth0 } from '@auth0/auth0-react';
import apis from './api';

function App() {
  const { loginWithRedirect, logout, user, getAccessTokenSilently } = useAuth0();
  const [ theme, setTheme ] = useState('theme--light');
  const [ dbUser, setDbUser ] = useState(null);
  const [ token, setToken ] = useState(null);

  useEffect(() => {
    if (user) {
      connectUserToDb();
    }
  }, [user])

  const toggleTheme = () => {
    if (theme === 'theme--dark') {
        setTheme('theme--light');
        apis.updateUser(dbUser._id, {theme: 'theme--light'}).then(res => {
          console.log("updateUser:: res", res);
        }).catch(e => {
          console.error("updateUser", e);
        })
    } else {
        setTheme('theme--dark');
        apis.updateUser(dbUser._id, {theme: 'theme--dark'}).then(res => {
          console.log("updateUser:: res", res);
        }).catch(e => {
          console.error("updateUser", e);
        })
    }
  }

  const signOut = () => {
    logout();
  }

  const connectUserToDb = async () => {
    const _token = await getAccessTokenSilently();
    setToken(_token);
    apis.getUser(_token, user.email).then(res => {
      console.log("connectUserToDb:: res", res);
      if (!res.data.output) {
        createUser(_token);
      } else {
        setTheme(res.data.output.theme);
        setDbUser(res.data.output);
      }
    }).catch(e => {
      console.error("connectUserToDb", e);
    }) 
  }

  const createUser = (_token) => {
    apis.createUser(_token, {email: user.email}).then(res => {
      console.log("createUser:: res", res);
      connectUserToDb();
    }).catch(e => {
      console.error("createUser", e);
    })
  }

  return (
    <div className={theme + ' App'}>
      {!user ? (

        <Screens.Welcome.Main signIn={loginWithRedirect} />

      ) : (
        
        dbUser ? (
          <Router>
            <Switch>
              <Route 
                path="/" 
                exact
                render={(props) => <Screens.Diary.Main {...props} theme={theme} toggleTheme={toggleTheme} user={{...user, ...dbUser, token}} signOut={signOut} />} 
              />
            </Switch>
          </Router>
        ) : (
          <Screens.Welcome.Loading />
        )

      )}
    </div>
  );
}

export default App;
