import Section from "../Section"
import SectionName from "../SectionName.jsx"
import {OPEN_SOURCE_SOFTWARE} from "../../data/openSourceSoftware.js"
import Software from "./Software.jsx"

export default function OpenSourceSoftwareSection() {

    const ossSoftware = OPEN_SOURCE_SOFTWARE.map(software => (
            <Software
                key={software.github_url}
                {...software}
            />
        )
    )

    return (
        <Section>
            <SectionName name="Open-Source Software"/>
            {ossSoftware}
        </Section>
    )
}
