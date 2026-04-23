import parseCitation from "../../bibtexCitationParser";
import Section from "../Section";
import SectionName from "../SectionName";
import { SHORT_AUTHOR_PUBLICATIONS } from "../../data/shortAuthorPublications";
import ShortAuthorPublication from "./ShortAuthorPublication";

export default function ShortAuthorPublicationsSection() {
    const shortAuthorPubJsons = SHORT_AUTHOR_PUBLICATIONS.map(bibtexCitation => parseCitation(bibtexCitation))
    const shortAuthorPubs = shortAuthorPubJsons.map(sapj => <ShortAuthorPublication key={sapj.arxivUrl} {...sapj} />)

    return (
        <Section>
            <SectionName name="Short-Author Publications" />
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
                {shortAuthorPubs}
            </div>
        </Section>
    )
}