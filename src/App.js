import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './resetStyles.css';
import { useState } from 'react';
import HomePage from './components/pages/HomePage';
import SignInPage from './components/pages/SignInPage';
import CustomThemeProvider from './CustomThemeProvider';

function App() {
  const userInitialState = undefined;

  const [user, setUser] = useState(userInitialState);

  const signIn = (userData) => setUser(userData);

  const signOut = () => setUser(userInitialState);

  return (
    <CustomThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/user" element={<SignInPage user={user} signIn={signIn} signOut={signOut} />} />
        </Routes>
      </BrowserRouter>
    </CustomThemeProvider>
  );
}

export default App;
