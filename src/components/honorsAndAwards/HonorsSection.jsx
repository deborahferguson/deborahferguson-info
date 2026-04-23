import Section from "../Section.jsx"
import SectionName from "../SectionName.jsx"
import {HONORS} from "../../data/honors.js"
import Honor from "./Honor.jsx"

export default function HonorsSection() {
    const honors = HONORS.map(honor => (
            <Honor
                key={honor.year + "|" + honor.name}
                {...honor}
            />
        )
    )
    return (
        <Section>
            <SectionName name="Honors and Awards"/>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {honors}
            </div>
        </Section>
    )
}