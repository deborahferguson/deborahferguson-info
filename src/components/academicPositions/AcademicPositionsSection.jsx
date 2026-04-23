import { ACADEMIC_POSITIONS } from "../../data/academicPositions";
import Section from "../Section";
import SectionName from "../SectionName";
import AcademicPosition from "./AcademicPosition";

export default function AcademicPositionsSection() {
    const academicPositions = ACADEMIC_POSITIONS.map(ap => {
        return <AcademicPosition key={`${ap.period}|${ap.title}`} {...ap} />
    })

    return <Section>
        <SectionName name="Academic Positions" />
        <div className="grid sm:grid-cols-2 gap-4">
            {academicPositions}
        </div>
    </Section>
}