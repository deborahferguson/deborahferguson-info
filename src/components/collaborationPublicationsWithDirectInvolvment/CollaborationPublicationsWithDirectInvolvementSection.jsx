import { COLLABORATION_PUBLICATIONS_WITH_DIRECT_INVOLVEMENT } from "../../data/collaborationPublicationsWithDirectInvolvement"
import CollaborationPublication from "../collaborationPublications/CollaborationPublication"
import Section from "../Section"
import SectionName from "../SectionName"
import parseCitation from "../../bibtexCitationParser"

export default function CollaborationPublicationsWithDirectInvolvementSection() {
    const jsonCollabPubsWithInvolvement = COLLABORATION_PUBLICATIONS_WITH_DIRECT_INVOLVEMENT.map(pubData => ({
        ...parseCitation(pubData.bibtexCitation),
        involvementExplanation: pubData.involvementExplanation,
        outreachMaterialLinks: pubData.outreachMaterialLinks
    }))
    const collaborationPublicationsWithDirectInvolvement = jsonCollabPubsWithInvolvement.map (jcpwi => <CollaborationPublication key={jcpwi.arxivUrl} {...jcpwi} />)

    return (
        <Section>
            <SectionName name="Collaboration Publications with Direct Involvement" />
            {collaborationPublicationsWithDirectInvolvement}
        </Section>
    )
}