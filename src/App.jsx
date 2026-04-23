import './App.css'
import MediaSection from "./components/media/MediaSection.jsx"
import ContactSection from "./components/contact/ContactSection.jsx"
import OpenSourceSoftwareSection from "./components/openSourceSoftware/OpenSourceSoftwareSection.jsx"
import HonorsSection from "./components/honorsAndAwards/HonorsSection.jsx"
import ConferencePresentationsSection from "./components/conferencePresentations/ConferencePresentationsSection.jsx"
import InvitedTalksSection from './components/invitedTalks/InvitedTalksSection.jsx'
import CollaborationPublicationsSection from './components/collaborationPublications/CollaborationPublicationsSection.jsx'
import ShortAuthorPublicationsSection from './components/shortAuthorPublications/ShortAuthorPublicationsSection.jsx'
import TeachingSection from './components/teaching/TeachingSection.jsx'
import LeadershipPositionsSection from './components/leadershipPositions/LeadershipPositionsSection.jsx'
import AcademicPositionsSection from './components/academicPositions/AcademicPositionsSection.jsx'
import EducationSection from './components/education/EducationSection.jsx'
import IntroSection from './components/intro/IntroSection.jsx'
import HeaderImage from './components/headerImage/HeaderImage.jsx'
import CollaborationPublicationsWithDirectInvolvementSection from './components/collaborationPublicationsWithDirectInvolvment/CollaborationPublicationsWithDirectInvolvementSection.jsx'

function App() {
    return (
        <>
            <HeaderImage />
            <div className="container mx-auto font-sans text-slate-700">
                <IntroSection />
                <EducationSection />
                <AcademicPositionsSection />
                <LeadershipPositionsSection />
                <TeachingSection />
                <ShortAuthorPublicationsSection />
                <CollaborationPublicationsWithDirectInvolvementSection />
                <CollaborationPublicationsSection />
                <InvitedTalksSection />
                <ConferencePresentationsSection />
                <HonorsSection />
                <OpenSourceSoftwareSection />
                <MediaSection />
                <ContactSection />
            </div>
        </>
    )
}

export default App
