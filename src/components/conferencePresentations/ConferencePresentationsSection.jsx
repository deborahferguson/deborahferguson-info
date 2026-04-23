import Section from "../Section.jsx"
import SectionName from "../SectionName.jsx"
import {CONFERENCE_PRESENTATIONS} from "../../data/conferencePresentations.js"
import Presentation from "./Presentation.jsx"

export default function ConferencePresentationsSection() {
    const presentations = CONFERENCE_PRESENTATIONS.map(presentation => (
            <Presentation
                key={presentation.title + "|" + presentation.date}
                {...presentation}
            />
        )
    )
    return (
        <Section>
            <SectionName name="Conference Presentations"/>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {presentations}
            </div>
        </Section>
    )
}