import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OurMission from "./pages/OurMission";
import OurCrates from "./pages/OurCrates";
import OurTeam from "./pages/OurTeam";
import AboutLily from "./pages/AboutLily";
import HowToHelp from "./pages/HowToHelp";
import OurResponse from "./pages/OurResponse";
import Media from "./pages/Media";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/our-mission" element={<OurMission />} />
        <Route path="/our-crates" element={<OurCrates />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/about-lily" element={<AboutLily />} />
        <Route path="/how-to-help" element={<HowToHelp />} />
        <Route path="/our-response" element={<OurResponse />} />
        <Route path="/media" element={<Media />} />
      </Route>
    </Routes>
  );
}
