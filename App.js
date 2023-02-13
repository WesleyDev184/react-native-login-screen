import { Router } from './src/routes/Router';
import ThemeAppProvider from './src/contexts/themeContext';
import AuthAppProvider from './src/contexts/authContext';

const App = () => {
  return (
    <AuthAppProvider>
      <ThemeAppProvider>
        <Router />
      </ThemeAppProvider>
    </AuthAppProvider>
  );
};

export default App;
