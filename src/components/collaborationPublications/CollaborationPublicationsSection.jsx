import { useRef, useState } from "react";
import parseCitation from "../../bibtexCitationParser";
import { COLLABORATION_PUBLICATIONS } from "../../data/collaborationPublications";
import Section from "../Section";
import SectionName from "../SectionName";
import CollaborationPublication from "./CollaborationPublication";
import "./CollaborationPublicationSection.css"
import ShowAllButton from "./ShowAllButton";
import ShowFewerButton from "./ShowFewerButton";

export default function CollaborationPublicationsSection() {

    const [showAll, setShowAll] = useState(false)
    const sectionNameRef = useRef(null)

    function handleShowAll() {
        setShowAll(true)
    }

    function handleShowFewer() {
        setShowAll(false)

        setTimeout(() => {
            sectionNameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }, 0)
        })
    }

    const jsonCollabPubs = COLLABORATION_PUBLICATIONS.map(bibtexCitation => parseCitation(bibtexCitation))
    const collaborationPublications = jsonCollabPubs.map(jcp => <CollaborationPublication key={jcp.arxivUrl} {...jcp} />)


    return (
        <Section>
            <div ref={sectionNameRef}>
                <SectionName name="Collaboration Publications" />
            </div>

            <div className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2" + (showAll ? "" : " fade-down")}>
                {showAll ? collaborationPublications : collaborationPublications.slice(0, 8)}
            </div>

            <div className="flex justify-center">
                {!showAll && <ShowAllButton onClick={handleShowAll} quantity={collaborationPublications.length} />}
                {showAll && <ShowFewerButton onClick={handleShowFewer} />}
            </div>
        </Section>
    )
}