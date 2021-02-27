import { useState, useEffect } from 'react';
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
      <Screens.Diary.Main theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
