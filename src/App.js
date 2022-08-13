import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Homepage, Error} from "./pages"
function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element = {<Homepage />}></Route>
      <Route path="*" element = {<Error />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
