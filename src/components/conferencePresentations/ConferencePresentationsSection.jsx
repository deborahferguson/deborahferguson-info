import {CONFERENCE_PRESENTATIONS} from "../../data/conferencePresentations.js"
import Presentation from "./Presentation.jsx"
import CollapsibleSection from "../CollapsibleSection";

export default function ConferencePresentationsSection() {
    const presentations = CONFERENCE_PRESENTATIONS.map(presentation => (
            <Presentation
                key={presentation.title + "|" + presentation.date}
                {...presentation}
            />
        )
    )
    return (
        <CollapsibleSection
            name="Conference Presentations"
            items={presentations}
            gridClassName="grid sm:grid-cols-1 md:grid-cols-2 gap-2"
            itemsToShowInitially={4}
        />
    )
}