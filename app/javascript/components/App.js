import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from "./Greeting";
import NotFound from "./NotFound";
import store from '../redux/configureStore';


function App() {
  return (
    <Provider store={store}>
      <h1>Hello Rails React App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
