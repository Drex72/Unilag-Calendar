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
import SectionXII from "./SectionXII";
import SectionXIII from "./SectionXIII";
import Symbols from "./Symbols";
import Home from "./Home";
import History from "./SectionI/History";
import Development from "./SectionI/Development";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import {
  Authorities, Chancellors, ProChancellors, Congregation, Convocation, CouncilMembers, DistinguishedProfessors, EmeritusProfessors, GoldMedallist, HonorableMinister, HonoraryAwardees,
  Officers, PrincipalOfficers, ProvostAndDeans, Senate, Visitors
} from './SectionII/'

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


            <Route path="/sectionII" element={<Authorities />} />
            <Route path="/sectionII/i" element={<Authorities />} />
            <Route path="/sectionII/ii" element={<Visitors />} />
            <Route path="/sectionII/iii" element={<HonorableMinister />} />
            <Route path="/sectionII/iv" element={<Chancellors />} />
            <Route path="/sectionII/v" element={<ProChancellors />} />
            <Route path="/sectionII/vi" element={<CouncilMembers />} />
            <Route path="/sectionII/vii" element={<PrincipalOfficers />} />
            <Route path="/sectionII/viii" element={<Senate />} />
            <Route path="/sectionII/ix" element={<Congregation />} />
            <Route path="/sectionII/x" element={<ProvostAndDeans />} />
            <Route path="/sectionII/xi" element={<Officers />} />
            <Route path="/sectionII/xii" element={<Convocation />} />
            <Route path="/sectionII/xiii" element={<HonoraryAwardees />} />
            <Route path="/sectionII/xiv" element={<EmeritusProfessors />} />
            <Route path="/sectionII/xv" element={<DistinguishedProfessors />} />
            <Route path="/sectionII/xvi" element={<GoldMedallist />} />



            <Route path="/sectionIII" element={<SectionIII />} />
            <Route path="/sectionIV" element={<SectionIV />} />
            <Route path="/sectionV" element={<SectionV />} />
            <Route path="/sectionVI" element={<SectionVI />} />
            <Route path="/sectionVII" element={<SectionVII />} />
            <Route path="/sectionVIII" element={<SectionVIII />} />
            <Route path="/sectionIX" element={<SectionIX />} />
            <Route path="/sectionX" element={<SectionX />} />
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
