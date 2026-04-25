import { useRef, useState } from "react";
import Section from "../Section.jsx"
import SectionName from "../SectionName.jsx"
import {HONORS} from "../../data/honors.js"
import Honor from "./Honor.jsx"
import ShowAllButton from "../collaborationPublications/ShowAllButton";
import ShowFewerButton from "../collaborationPublications/ShowFewerButton";

export default function HonorsSection() {
    const [showAll, setShowAll] = useState(false)
    const sectionNameRef = useRef(null)

    function handleShowAll() {
        setShowAll(true)
    }

    function handleShowFewer() {
        setShowAll(false)

        setTimeout(() => {
            sectionNameRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }, 0)
        })
    }

    const honors = HONORS.map(honor => (
            <Honor
                key={honor.year + "|" + honor.name}
                {...honor}
            />
        )
    )
    return (
        <Section>
            <div ref={sectionNameRef}>
                <SectionName name="Honors and Awards"/>
            </div>
            <div className={"grid sm:grid-cols-1 md:grid-cols-2 gap-2" + (showAll ? "" : " fade-down")}>
                {showAll ? honors : honors.slice(0, 4)}
            </div>

            <div className="flex justify-center">
                {!showAll && <ShowAllButton onClick={handleShowAll} quantity={honors.length} />}
                {showAll && <ShowFewerButton onClick={handleShowFewer} />}
            </div>
        </Section>
    )
}