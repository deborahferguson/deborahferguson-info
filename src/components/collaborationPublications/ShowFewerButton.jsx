import showFewerIcon from "../../assets/bars-arrow-up.svg"

export default function ShowFewerButton({ onClick }) {
    return (
        <a
            className="cursor-pointer rounded-md inline-flex items-center gap-1 px-1.5 py-1 text-xs text-slate-700 bg-slate-300 hover:bg-slate-400"
            onClick={onClick}
        >
            <img className="h-4 w-4" src={showFewerIcon} alt="Show Fewer Icon" />
            show fewer
        </a>
    )
}