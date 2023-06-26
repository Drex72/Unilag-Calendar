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
import SectionX from "./SectionX";
import SectionXI from "./SectionXI";
import SectionXIII from "./SectionXIII";
import Symbols from "./Symbols";
import Home from "./Home";
import History from "./SectionI/History";
import Development from "./SectionI/Development";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import {
  SectionII
} from './SectionII/'
import HousingUnit from "./SectionXi/HousingUnit";
import MedicalCenter from "./SectionXi/MedicalCenter";
import './styles.scss'
import SportsCenter from "./SectionXi/SportsCenter";
import PlacesOfWorship from "./SectionXi/PlacesOfWorship";
import StaffSchool from "./SectionXi/StaffSchool";

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
            <Route path="/sectionX" element={<SectionX />} />
            <Route path="/sectionXI" element={<SectionXI />} />

            <Route path="/sectionXI/i" element={<HousingUnit />} />
            <Route path="/sectionXI/ii" element={<MedicalCenter />} />
            <Route path="/sectionXI/iii" element={<SportsCenter />} />
            <Route path="/sectionXI/iv" element={<PlacesOfWorship />} />
            <Route path="/sectionXI/v" element={<StaffSchool />} />




            <Route path="/sectionXIII" element={<SectionXIII />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
