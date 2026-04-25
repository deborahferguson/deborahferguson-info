import ArxivButton from "./ArxivButton"
import JournalButton from "./JournalButton"
import "./ShortAuthorPublication.css"
import { ABSTRACTS_BY_ARXIV_URL } from "../../data/shortAuthorPublications"

export default function ShortAuthorPublication({ title, author, journal, doiUrl, arxivUrl }) {
    return (
        <div
            className="border border-slate-300 bg-white rounded-xs text-center h-70 px-4 sm:px-8 md:px-12 lg:px-16 py-8 hover:scale-101 overflow-hidden flex flex-col"
        >
            <p className="text-md font-semibold mt-1">{title}</p>
            <p className="text-xs mt-4 mb-2">{author}</p>
            <div className="flex-shrink-0">
                <JournalButton journal={journal} doiUrl={doiUrl} />
                <ArxivButton arxivUrl={arxivUrl} />
            </div>
            <div className="fade-down flex-1 w-full" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', marginBottom: '-3rem' }}>
                <p className="mt-2 w-full h-full">
                    {ABSTRACTS_BY_ARXIV_URL[arxivUrl]}
                </p>
            </div>
        </div>
    )
}