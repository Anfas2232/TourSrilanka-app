import React, { useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './transitions.css';

import SriLankaMap from './SriLankaMap';
import ColomboDetailsPage from './ColomboDetailsPage';
import JaffnaDetailsPage from './JaffnaDetailsPage';
import AnuradhapuraDetailsPage from './AnuradhapuraDetailsPage';
import ArugamBayDetailsPage from './ArugamBayDetailsPage';
import BatticaloaDetailsPage from './BatticaloaDetailsPage';
import PasikudahDetailsPage from './PasikudahDetailsPage';
import PolonnaruwaDetailsPage from './PolonnaruwaDetailsPage';
import YalaNationalParkDetailsPage from './YalaNationalParkDetailsPage';
import KandyDetailsPage from './KandyDetailsPage';
import BentotaDetailsPage from './BentotaDetailsPage';
import GalleDetailsPage from './GalleDetailsPage';
import DambullaDetailsPage from './DambullaDetailsPage';
import SigiriyaDetailsPage from './SigiriyaDetailsPage';
import EllaDetailsPage from './EllaDetailsPage';
import NuwaraEliyaDetailsPage from './NuwaraEliyaDetailsPage';
import NegomboDetailsPage from './NegomboDetailsPage';
import PlaceDetails from './PlaceDetails';
import AboutUsPage from './AboutUsPage';
import ContactUsPage from './ContactUsPage';
import KeyExperiencesPage from './KeyExperiencesPage';



function AnimatedRoutes() {
  const location = useLocation();
  const nodeRef = useRef(null); // 👈 Required for React 18

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.key}
        classNames="fade"
        timeout={300}
        nodeRef={nodeRef} // 👈 Important!
      >
        <div ref={nodeRef}> {/* 👈 Ref must be attached to a real DOM node */}
          <Routes location={location}>
            <Route path="/" element={<SriLankaMap />} />
            <Route path="/Map" element={<SriLankaMap />} />
            <Route path="/details/:name" element={<PlaceDetails />} />
            <Route path="/details/Anuradhapura" element={<AnuradhapuraDetailsPage />} />
            <Route path="/details/Colombo" element={<ColomboDetailsPage />} />
            <Route path="/details/Jaffna" element={<JaffnaDetailsPage />} />
            <Route path="/details/NuwaraEliya" element={<NuwaraEliyaDetailsPage />} />
            <Route path="/details/ArugamBay" element={<ArugamBayDetailsPage />} />
            <Route path="/details/Batticaloa" element={<BatticaloaDetailsPage />} />
            <Route path="/details/Pasikudah" element={<PasikudahDetailsPage />} />
            <Route path="/details/Kandy" element={<KandyDetailsPage />} />
            <Route path="/details/YalaNationalPark" element={<YalaNationalParkDetailsPage />} />
            <Route path="/details/Polonnaruwa" element={<PolonnaruwaDetailsPage />} />
            <Route path="/details/Bentota" element={<BentotaDetailsPage />} />
            <Route path="/details/Galle" element={<GalleDetailsPage />} />
            <Route path="/details/Dambulla" element={<DambullaDetailsPage />} />
            <Route path="/details/Sigiriya" element={<SigiriyaDetailsPage />} />
            <Route path="/details/Negombo" element={<NegomboDetailsPage />} />
            <Route path="/details/Ella" element={<EllaDetailsPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/key-experiences" element={<KeyExperiencesPage />} />
           
       
        
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default AnimatedRoutes;
