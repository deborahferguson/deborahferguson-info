import { useRef, useState } from "react";
import { INVITED_TALKS } from "../../data/invitedTalks"
import Section from "../Section"
import SectionName from "../SectionName"
import Talk from "./Talk"
import ShowAllButton from "../collaborationPublications/ShowAllButton";
import ShowFewerButton from "../collaborationPublications/ShowFewerButton";

export default function InvitedTalksSection() {
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

    const talks = INVITED_TALKS.map(
        talk => (
            <Talk
                key={talk.title + "|" + talk.date}
                {...talk}
            />
        )
    )

    return (
        <Section>
            <div ref={sectionNameRef}>
                <SectionName name="Invited Talks" />
            </div>
            <div className={"grid sm:grid-cols-1 md:grid-cols-2 gap-2" + (showAll ? "" : " fade-down")}>
                {showAll ? talks : talks.slice(0, 4)}
            </div>

            <div className="flex justify-center">
                {!showAll && <ShowAllButton onClick={handleShowAll} quantity={talks.length} />}
                {showAll && <ShowFewerButton onClick={handleShowFewer} />}
            </div>
        </Section>
    )

}