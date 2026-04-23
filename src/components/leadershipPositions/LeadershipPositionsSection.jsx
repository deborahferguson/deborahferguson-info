import Section from "../Section"
import SectionName from "../SectionName"
import { LEADERSHIP_POSITIONS } from "../../data/leadershipPositions"

export default function leadershipPositionsSection() {
    const leadershipPositions = LEADERSHIP_POSITIONS.map((pos) => (
        (
            <div key={`${pos.positions}|${pos.period}`}>
                <p className="font-semibold text-xl">
                    {pos.body}
                    <span className="text-sm text-slate-500 ml-1">{pos.period}</span>
                </p>
                <p>{pos.positions}</p>
            </div>
        )
    ))
    return <Section>
        <SectionName name="Leadership Positions" />
        <div className="grid sm:grid-cols-2 gap-4">
            {leadershipPositions}
        </div>
    </Section>
}