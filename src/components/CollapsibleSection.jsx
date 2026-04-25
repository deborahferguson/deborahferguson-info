import { useRef, useState } from "react";
import Section from "./Section";
import SectionName from "./SectionName";
import ShowAllButton from "./collaborationPublications/ShowAllButton";
import ShowFewerButton from "./collaborationPublications/ShowFewerButton";

export default function CollapsibleSection({ name, items, gridClassName, itemsToShowInitially = 4, children }) {
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

    const displayedItems = showAll ? items : items.slice(0, itemsToShowInitially)
    const content = children ? children(displayedItems) : displayedItems

    return (
        <Section>
            <div ref={sectionNameRef}>
                <SectionName name={name} />
            </div>
            <div className={gridClassName + (showAll ? "" : " fade-down")}>
                {content}
            </div>

            <div className="flex justify-center">
                {!showAll && <ShowAllButton onClick={handleShowAll} quantity={items.length} />}
                {showAll && <ShowFewerButton onClick={handleShowFewer} />}
            </div>
        </Section>
    )
}
