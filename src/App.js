import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Header}   from "./components"
import {LoadingState} from "./components";
import {Homepage, Error, Capsules, Cores, Crew} from "./pages"




function App() {
  return (
   <BrowserRouter>
   <Header />
   <LoadingState />
   <Routes>
      <Route path="/" element = {<Homepage />}></Route>
      <Route path = '/capsules' element = {<Capsules/>}></Route>
      <Route path = '/cores' element = {<Cores />}></Route>
      <Route path = '/crew' element = {<Crew />}></Route>
      <Route path="*" element = {<Error />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
