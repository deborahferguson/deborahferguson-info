import viewPublicationIcon from "../../assets/newspaper.svg"

export default function ViewPublicationButton({ doiUrl }) {
    return (
        <a
            className="cursor-pointer rounded-md inline-flex items-center gap-1 px-1.5 py-1 text-xs text-slate-700 bg-slate-300 hover:bg-slate-400 mr-1"
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img className="w-4 h-4" src={viewPublicationIcon} alt="View Publication Icon" />
            publication
        </a>
    )
}