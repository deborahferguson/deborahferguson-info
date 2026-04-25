import parseCitation from "../../bibtexCitationParser";
import { COLLABORATION_PUBLICATIONS } from "../../data/collaborationPublications";
import CollaborationPublication from "./CollaborationPublication";
import "./CollaborationPublicationSection.css"
import CollapsibleSection from "../CollapsibleSection";

export default function CollaborationPublicationsSection() {
    const jsonCollabPubs = COLLABORATION_PUBLICATIONS.map(bibtexCitation => parseCitation(bibtexCitation))
    const collaborationPublications = jsonCollabPubs.map(jcp => <CollaborationPublication key={jcp.arxivUrl} {...jcp} />)

    return (
        <CollapsibleSection
            name="Collaboration Publications"
            items={collaborationPublications}
            gridClassName="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"
            itemsToShowInitially={8}
        />
    )
}