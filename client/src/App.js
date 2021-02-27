import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as Screens from './screens';

function App() {
  const [ theme, setTheme ] = useState('theme--light');

  const toggleTheme = () => {
    if (theme === 'theme--dark') {
        setTheme('theme--light');
    } else {
        setTheme('theme--dark');
    }
  }

  return (
    <div className={theme + ' App'}>
      <Router >
        <Switch>
          <Route 
            path="/" 
            exact
            render={(props) => <Screens.Diary.Main {...props} theme={theme} toggleTheme={toggleTheme} />} 
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
