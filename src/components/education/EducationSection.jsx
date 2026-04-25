import { DEGREES } from "../../data/degrees";
import Section from "../Section";
import SectionName from "../SectionName";
import Degree from "./Degree";

export default function EducationSection() {
    const degrees = DEGREES.map( degree => <Degree key={degree.degree} {...degree} />)

    return <Section>
        <SectionName name="Education" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {degrees}
        </div>
    </Section>    
}