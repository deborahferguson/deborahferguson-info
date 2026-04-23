import ArxivButton from "./ArxivButton"
import JournalButton from "./JournalButton"
import "./ShortAuthorPublication.css"
import { ABSTRACTS_BY_ARXIV_URL } from "../../data/shortAuthorPublications"

export default function ShortAuthorPublication({ title, author, journal, doiUrl, arxivUrl }) {
    return (
        <div
            className="border border-slate-300 bg-white rounded-xs text-center h-70 px-16 py-8 hover:scale-101 overflow-hidden"
        >
            <p className="text-md font-semibold mt-1">{title}</p>
            <p className="text-xs mt-4 mb-2">{author}</p>
            <JournalButton journal={journal} doiUrl={doiUrl} />
            <ArxivButton arxivUrl={arxivUrl} />
            <p className="mt-2 fade-down">
                {ABSTRACTS_BY_ARXIV_URL[arxivUrl]}
            </p>
        </div>
    )
}