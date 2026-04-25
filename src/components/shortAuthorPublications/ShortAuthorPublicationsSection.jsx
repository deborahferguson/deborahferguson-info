import { useRef, useState } from "react";
import parseCitation from "../../bibtexCitationParser";
import Section from "../Section";
import SectionName from "../SectionName";
import { SHORT_AUTHOR_PUBLICATIONS } from "../../data/shortAuthorPublications";
import ShortAuthorPublication from "./ShortAuthorPublication";
import ShowAllButton from "../collaborationPublications/ShowAllButton";
import ShowFewerButton from "../collaborationPublications/ShowFewerButton";

export default function ShortAuthorPublicationsSection() {
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

    const shortAuthorPubJsons = SHORT_AUTHOR_PUBLICATIONS.map(bibtexCitation => parseCitation(bibtexCitation))
    const shortAuthorPubs = shortAuthorPubJsons.map(sapj => <ShortAuthorPublication key={sapj.arxivUrl} {...sapj} />)

    return (
        <Section>
            <div ref={sectionNameRef}>
                <SectionName name="Short-Author Publications" />
            </div>
            <div className={"grid sm:grid-cols-1 lg:grid-cols-2 gap-2" + (showAll ? "" : " fade-down")}>
                {showAll ? shortAuthorPubs : shortAuthorPubs.slice(0, 4)}
            </div>

            <div className="flex justify-center mt-2">
                {!showAll && <ShowAllButton onClick={handleShowAll} quantity={shortAuthorPubs.length} />}
                {showAll && <ShowFewerButton onClick={handleShowFewer} />}
            </div>
        </Section>
    )
}