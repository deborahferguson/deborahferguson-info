export default function ArxivButton({ arxivUrl }) {
    return (
        <a
            className="text-xs border px-1 border-[rgb(179,27,27)] text-[rgb(179,27,27)] hover:bg-[rgb(179,27,27)] hover:text-white"
            href={arxivUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            arXiv
        </a>
    )    
}
