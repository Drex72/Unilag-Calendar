import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SectionIV from "./SectionIV";
import SectionV from "./SectionV";
import SectionVII from "./SectionVII";
import SectionIX from "./SectionIX";
import SectionXIII from "./SectionXIII";
import Home from "./Home";
import AcademicUnit from "./SectionVII/AcademicUnit";
import Arts from "./SectionVII/arts";
import CmulBASIC from "./SectionVII/cmul-basic";
import CmulCLINICAL from "./SectionVII/cmul-clinical";
import CmulDENTAL from "./SectionVII/cmul-dental";
import Education from "./SectionVII/education";
import Engineering from "./SectionVII/engineering";
import Environmental from "./SectionVII/environmental";
import Law from "./SectionVII/law";
import ManagementSCIENCE from "./SectionVII/management-science";
import Pharmacy from "./SectionVII/pharmacy";
import Science from "./SectionVII/science";
import SocialSCIENCE from "./SectionVII/social-science";
import SPGS from "./SectionVII/spgs";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import { SectionII } from "./SectionII/SectionII";
import HousingUnit from "./SectionXi/HousingUnit";
import MedicalCenter from "./SectionXi/MedicalCenter";
import "./styles.scss";
import SportsCenter from "./SectionXi/SportsCenter";
import PlacesOfWorship from "./SectionXi/PlacesOfWorship";
import StaffSchool from "./SectionXi/StaffSchool";
import SectionXII from "./SectionXII/SectionXII";
import { SectionVIII } from "./sectionVIII/index";
import SectionVI from "./SectionVI/SectionVI";
import { SectionI } from "./SectionI/SectionI";
import SectionX from "./SectionX/SectionX";
import { SectionIII } from "./SectionIII/SectionIII";


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App flex">
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/sectionI" element={<SectionI />} />
            <Route path="/sectionII" element={<SectionII />} />
            <Route path="/sectionIII" element={<SectionIII />} />
            
            <Route path="/sectionIV" element={<SectionIV />} />
            <Route path="/sectionV" element={<SectionV />} />
            <Route path="/sectionVI" element={<SectionVI />} />
            <Route path="/sectionVII" element={<SectionVII />} />
            <Route path="/sectionVIII" element={<SectionVIII />} />
            <Route path="/sectionIX" element={<SectionIX />} />
            <Route path="/sectionX" element={<SectionX />} />


            <Route path="/sectionVII" element={<SectionVII />} />
            <Route path="/sectionVII/academic-unit" element={<AcademicUnit />} />
            <Route path="/sectionVII/i" element={<Arts />} />
            <Route path="/sectionVII/ii" element={<CmulBASIC />} />
            <Route path="/sectionVII/iii" element={<CmulCLINICAL />} />
            <Route path="/sectionVII/iv" element={<CmulDENTAL />} />
            <Route path="/sectionVII/v" element={<Education />} />
            <Route path="/sectionVII/vi" element={<Engineering />} />
            <Route path="/sectionVII/vii" element={<Environmental />} />
            <Route path="/sectionVII/viii" element={<Law />} />
            <Route path="/sectionVII/ix" element={<ManagementSCIENCE />} />
            <Route path="/sectionVII/x" element={<Pharmacy />} />
            <Route path="/sectionVII/xi" element={<Science />} />
            <Route path="/sectionVII/xii" element={<SocialSCIENCE />} />
            <Route path="/sectionVII/xiii" element={<SPGS />} />


            <Route path="/sectionXI/i" element={<HousingUnit />} />
            <Route path="/sectionXI/ii" element={<MedicalCenter />} />
            <Route path="/sectionXI/iii" element={<SportsCenter />} />
            <Route path="/sectionXI/iv" element={<PlacesOfWorship />} />
            <Route path="/sectionXI/v" element={<StaffSchool />} />

            <Route path="/sectionXII" element={<SectionXII />} />
            <Route path="/sectionXIII" element={<SectionXIII />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
