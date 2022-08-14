import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components"
import {
  Homepage,
  Error,
  Capsules,
  Cores,
  Crew,
  SingeCrew,
  Dragons,
  SingleDragons,
  Landpads,
  SingleLandsPads,
  Launches,
  SingleLaunch,
  Launchpads,
  SingleLaunchPad,
  Payloads,
  Roadster
} from "./pages"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/capsules" element={<Capsules />}></Route>
        <Route path="/cores" element={<Cores />}></Route>
        <Route path="/crew" element={<Crew />}></Route>
        <Route path="/crew/:id" element={<SingeCrew />}></Route>
        <Route path="/dragons" element={<Dragons />}></Route>
        <Route path="/dragons/:id" element={<SingleDragons />}></Route>
        <Route path="/landpads" element={<Landpads />}></Route>
        <Route path="/landpads/:id" element={<SingleLandsPads />}></Route>
        <Route path="/launches" element={<Launches />}></Route>
        <Route path="/launches/:id" element={<SingleLaunch />}></Route>
        <Route path="/launchpads" element={<Launchpads />}></Route>
        <Route path="/launchpads/:id" element={<SingleLaunchPad />}></Route>
        <Route path="/payloads" element={<Payloads />}></Route>
        <Route path="/roadster" element={<Roadster />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App