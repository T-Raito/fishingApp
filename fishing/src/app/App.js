import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../screens/Home";
import { FishingInfo } from "../screens/FishingInfo";
import { TourInfo } from "../screens/TourInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fishinginfo" element={<FishingInfo />} />
        <Route path="/tourinfo" element={<TourInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
