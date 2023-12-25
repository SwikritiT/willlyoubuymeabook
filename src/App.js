import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import WillYouBuyMeThisBook from "./components/WillYouBuyMeThisBook"

function App() {
  return (
      // <Router>
      //     <Routes>
      //         {/*<Route exact path="/" element={<Homepage/>} />*/}
      //         <Route path="/" element={<WillYouBuyMeThisBook/>} />
      //     </Routes>
      // </Router>
      <div className="App">
          <WillYouBuyMeThisBook/>
      </div>
  )
}

export default App
