import { DEGREES } from "../../data/degrees";
import Section from "../Section";
import SectionName from "../SectionName";
import Degree from "./Degree";

export default function EducationSection() {
    const degrees = DEGREES.map( degree => <Degree key={degree.degree} {...degree} />)

    return <Section>
        <SectionName name="Education" />
        <div className="grid sm: grid-cols-2 gap-4">
            {degrees}
        </div>
    </Section>    
}