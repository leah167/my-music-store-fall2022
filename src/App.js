import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./resetStyles.css";
import HomePage from "./components/pages/HomePage";
import SignInPage from "./components/pages/SignInPage";
import CustomThemeProvider from "./CustomThemeProvider";
import CartPage from "./components/pages/CartPage";
import ShoppingCartContextProvider from "./context/shoppingCartContext";
import store from "./redux-state/store";

function App() {
  return (
    <Provider store={store}>
      <CustomThemeProvider>
        <ShoppingCartContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user" element={<SignInPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </ShoppingCartContextProvider>
      </CustomThemeProvider>
    </Provider>
  );
}

export default App;
