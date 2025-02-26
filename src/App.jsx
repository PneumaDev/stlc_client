import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigationbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import CenteredSpinner from "./components/SpinnerComponent";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Partners = lazy(() => import("./pages/Partners"));
const Sermons = lazy(() => import("./pages/Sermons"));
const Youtube = lazy(() => import("./pages/Youtube"));
const Audio = lazy(() => import("./pages/Audios"));
const Itinerary = lazy(() => import("./pages/Itinerary"));

const App = () => {
  return (
    <Router>
      <Navigationbar />
      <div className="sm:mx-0 md:mx-4 lg:mx-10">
        <Suspense fallback={<CenteredSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sermons/youtube" element={<Youtube />} />
            <Route path="/sermons/audio/*" element={<Audio />} />
            {/* <Route path="/sermons/audio/album/:id" element={<AlbumDetails />} /> */}
            <Route path="/itinerary" element={<Itinerary />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <FooterWrapper />
    </Router>
  );
};

// New component to handle Footer rendering based on route
const FooterWrapper = () => {
  const location = useLocation();
  const isAudioPage = location.pathname.startsWith("/sermons/audio");

  return !isAudioPage ? <Footer /> : null;
};

export default App;
