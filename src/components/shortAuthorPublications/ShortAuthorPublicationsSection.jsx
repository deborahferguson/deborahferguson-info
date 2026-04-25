import parseCitation from "../../bibtexCitationParser";
import { SHORT_AUTHOR_PUBLICATIONS } from "../../data/shortAuthorPublications";
import ShortAuthorPublication from "./ShortAuthorPublication";
import CollapsibleSection from "../CollapsibleSection";

export default function ShortAuthorPublicationsSection() {
    const shortAuthorPubs = SHORT_AUTHOR_PUBLICATIONS.map(pub => {
        const parsedCitation = parseCitation(pub.bibtexCitation)
        return <ShortAuthorPublication key={parsedCitation.arxivUrl} abstract={pub.abstract} {...parsedCitation} />
    })

    return (
        <CollapsibleSection
            name="Short-Author Publications"
            items={shortAuthorPubs}
            gridClassName="grid sm:grid-cols-1 lg:grid-cols-2 gap-2"
            itemsToShowInitially={4}
        />
    )
}