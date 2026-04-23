import { TEACHING } from "../../data/teaching";
import Section from "../Section";
import SectionName from "../SectionName";
import Course from "./Course";

export default function TeachingSection() {

    const courses = TEACHING.map(course => <Course key={`${course.code}|${course.semester}`} {...course} />)

    return (
        <Section>
            <SectionName name="Teaching" />
            <div className="grid sm:grid-cols-2 gap-4">
                {courses}
            </div>
        </Section>
    )
}