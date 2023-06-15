import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SectionI from './SectionI';
import SectionII from "./SectionII";
import SectionIII from './SectionIII';
import SectionIV from './SectionIV';
import SectionV from './SectionV';
import SectionVI from './SectionVI';
import SectionVII from './SectionVII';
import SectionVIII from "./SectionVIII";
import SectionIX from './SectionIX';
import SectionX from './SectionX';
import SectionXI from './SectionXI';
import SectionXII from './SectionXII';
import SectionXIII from './SectionXIII';

function App() {
  return (
    <BrowserRouter>
      <div className="App flex">
        <Navbar/>
        <Routes>
          <Route path="/" element={<SectionI/>}/>
          <Route path="/sectionII" element={<SectionII/>}/>
          <Route path="/sectionIII" element={<SectionIII/>}/>
          <Route path="/sectionIV" element={<SectionIV/>}/>
          <Route path="/sectionV" element={<SectionV/>}/>
          <Route path="/sectionVI" element={<SectionVI/>}/>
          <Route path="/sectionVII" element={<SectionVII/>}/>
          <Route path="/sectionVIII" element={<SectionVIII/>}/>
          <Route path="/sectionIX" element={<SectionIX/>}/>
          <Route path="/sectionX" element={<SectionX/>}/>
          <Route path="/sectionXI" element={<SectionXI/>}/>
          <Route path="/sectionXII" element={<SectionXII/>}/>
          <Route path="/sectionXIII" element={<SectionXIII/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
