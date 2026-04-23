import ViewArxivButton from "./ViewArxivButton"
import ViewPublicationButton from "./ViewPublicationButton"

export default function CollaborationPublication({ title, author, collaboration, arxivUrl, doiUrl, year }) {

    const renderTitle = (text) => {
        if (!text.includes("M_⊙")) {
            return text
        }

        const parts = text.split("M_⊙")
        return (
            <>
                {parts.map((part, index) => (
                    <span key={index}>
                        {part}
                        {index < parts.length - 1 && (
                            <>
                                M<sub className="align-sub text-xs">⊙</sub>
                            </>
                        )}
                    </span>
                ))}
            </>
        )
    }

    return (
        <div className="my-1">
            <p className="font-semibold">{renderTitle(title)}</p>
            <p className="text-sm">
                {year}
                <span className="ml-2 italic">
                    {collaboration ? collaboration : author}
                </span>
            </p>
            {doiUrl && <ViewPublicationButton doiUrl={doiUrl} />}
            {arxivUrl && <ViewArxivButton arxivUrl={arxivUrl} />}
        </div>
    )
}