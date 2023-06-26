import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SectionI from "./SectionI";
import SectionIII from "./SectionIII";
import SectionIV from "./SectionIV";
import SectionV from "./SectionV";
import SectionVI from "./SectionVI";
import SectionVII from "./SectionVII";
import SectionVIII from "./SectionVIII";
import SectionIX from "./SectionIX";
// import SectionX from "./SectionX/SectionX";
import SectionXI from "./SectionXI";
import SectionXII from "./SectionXII";
import SectionXIII from "./SectionXIII";
import Symbols from "./Symbols";
import Home from "./Home";
import History from "./SectionI/History";
import Development from "./SectionI/Development";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { SectionII } from "./SectionII/";
import { SectionX } from "./SectionX/";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App flex">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/symbols" element={<Symbols />} />

            <Route path="/sectionI" element={<History />} />
            <Route path="/sectionI/i" element={<History />} />
            <Route path="/sectionI/ii" element={<Development />} />

            <Route path="/sectionII" element={<SectionII />} />
            <Route path="/sectionII/i" element={<SectionII />} />

            <Route path="/sectionIII" element={<SectionIII />} />
            <Route path="/sectionIV" element={<SectionIV />} />
            <Route path="/sectionV" element={<SectionV />} />
            <Route path="/sectionVI" element={<SectionVI />} />
            <Route path="/sectionVII" element={<SectionVII />} />
            <Route path="/sectionVIII" element={<SectionVIII />} />
            <Route path="/sectionIX" element={<SectionIX />} />
            {/* SECTION X START*/}
            <Route path="/sectionX" element={<SectionX />} />
            <Route path="/sectionX/i" element={<SectionX />} />
            <Route path="/sectionX/ii" element={<SectionX />} />
            <Route path="/sectionX/iii" element={<SectionX />} />
            <Route path="/sectionX/iv" element={<SectionX />} />
            <Route path="/sectionX/v" element={<SectionX />} />
            <Route path="/sectionX/vi" element={<SectionX />} />
            <Route path="/sectionX/vii" element={<SectionX />} />
            <Route path="/sectionX/viii" element={<SectionX />} />
            <Route path="/sectionX/ix" element={<SectionX />} />
            <Route path="/sectionX/x" element={<SectionX />} />
            <Route path="/sectionX/xi" element={<SectionX />} />
            <Route path="/sectionX/xii" element={<SectionX />} />
            <Route path="/sectionX/xiii" element={<SectionX />} />
            {/* SECTION X END */}

            {/* <Route path="/sectionX" element={<SectionX />} /> */}
            <Route path="/sectionXI" element={<SectionXI />} />
            <Route path="/sectionXII" element={<SectionXII />} />
            <Route path="/sectionXIII" element={<SectionXIII />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
