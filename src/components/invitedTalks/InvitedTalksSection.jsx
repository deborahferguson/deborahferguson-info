import { INVITED_TALKS } from "../../data/invitedTalks"
import Section from "../Section"
import SectionName from "../SectionName"
import Talk from "./Talk"

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
        <Section>
            <SectionName name="Invited Talks" />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {talks}
            </div>
        </Section>
    )

}