import ViewArxivButton from "./ViewArxivButton"
import ViewPublicationButton from "./ViewPublicationButton"

export default function CollaborationPublication({ title, author, collaboration, arxivUrl, doiUrl, year, involvementExplanation, outreachMaterialLinks }) {

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
            
            {involvementExplanation && (
                <p className="text-sm">
                    {involvementExplanation}
                </p>
            )}
            
            {doiUrl && <ViewPublicationButton doiUrl={doiUrl} />}
            
            {arxivUrl && <ViewArxivButton arxivUrl={arxivUrl} />}
            
            {outreachMaterialLinks && outreachMaterialLinks.length > 0 && (
                <div className="text-sm">
                    {outreachMaterialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mr-1 my-0.5 px-1.5 py-1 bg-slate-300 hover:bg-slate-400 text-slate-700 rounded-md text-xs"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}