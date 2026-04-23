import viewArxivIcon from "../../assets/archive-box.svg"

export default function ViewArxivButton({ arxivUrl }) {
    return (
        <a
            className="cursor-pointer rounded-md inline-flex items-center gap-1 px-1.5 py-1 text-xs text-slate-700 bg-slate-300 hover:bg-slate-400"
            href={arxivUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className="h-4 w-4" src={viewArxivIcon} alt="View on ArXiv Icon" />
            arXiv
        </a>
    )
}