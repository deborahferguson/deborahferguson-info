import { INVITED_TALKS } from "../../data/invitedTalks"
import Talk from "./Talk"
import CollapsibleSection from "../CollapsibleSection";

export default function InvitedTalksSection() {
    const talks = INVITED_TALKS.map(
        talk => (
            <Talk
                key={talk.title + "|" + talk.date}
                {...talk}
            />
        )
    )

    return (
        <CollapsibleSection
            name="Invited Talks"
            items={talks}
            gridClassName="grid sm:grid-cols-1 md:grid-cols-2 gap-2"
            itemsToShowInitially={4}
        />
    )
}