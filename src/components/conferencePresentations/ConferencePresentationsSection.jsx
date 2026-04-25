import { useRef, useState } from "react";
import Section from "../Section.jsx"
import SectionName from "../SectionName.jsx"
import {CONFERENCE_PRESENTATIONS} from "../../data/conferencePresentations.js"
import Presentation from "./Presentation.jsx"
import ShowAllButton from "../collaborationPublications/ShowAllButton";
import ShowFewerButton from "../collaborationPublications/ShowFewerButton";

export default function ConferencePresentationsSection() {
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

    const presentations = CONFERENCE_PRESENTATIONS.map(presentation => (
            <Presentation
                key={presentation.title + "|" + presentation.date}
                {...presentation}
            />
        )
    )
    return (
        <Section>
            <div ref={sectionNameRef}>
                <SectionName name="Conference Presentations"/>
            </div>
            <div className={"grid sm:grid-cols-1 md:grid-cols-2 gap-2" + (showAll ? "" : " fade-down")}>
                {showAll ? presentations : presentations.slice(0, 4)}
            </div>

            <div className="flex justify-center">
                {!showAll && <ShowAllButton onClick={handleShowAll} quantity={presentations.length} />}
                {showAll && <ShowFewerButton onClick={handleShowFewer} />}
            </div>
        </Section>
    )
}