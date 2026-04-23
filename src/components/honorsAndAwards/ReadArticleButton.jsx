import bookIcon from "../../assets/book_icon.svg"

export default function ReadArticleButton({articleUrl}) {
    return (
        <a
            className="rounded-md inline-flex items-center gap-1 px-1.5 py-1 text-xs text-slate-700 bg-slate-300 hover:bg-slate-400"
            href={articleUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="h-4 w-4"
                src={bookIcon}
                alt="Book Icon"
            />
            Read article
        </a>
    )
}