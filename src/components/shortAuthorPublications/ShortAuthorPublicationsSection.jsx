import parseCitation from "../../bibtexCitationParser";
import { SHORT_AUTHOR_PUBLICATIONS } from "../../data/shortAuthorPublications";
import ShortAuthorPublication from "./ShortAuthorPublication";
import CollapsibleSection from "../CollapsibleSection";

export default function ShortAuthorPublicationsSection() {
    const shortAuthorPubJsons = SHORT_AUTHOR_PUBLICATIONS.map(bibtexCitation => parseCitation(bibtexCitation))
    const shortAuthorPubs = shortAuthorPubJsons.map(sapj => <ShortAuthorPublication key={sapj.arxivUrl} {...sapj} />)

    return (
        <CollapsibleSection
            name="Short-Author Publications"
            items={shortAuthorPubs}
            gridClassName="grid sm:grid-cols-1 lg:grid-cols-2 gap-2"
            itemsToShowInitially={4}
        />
    )
}