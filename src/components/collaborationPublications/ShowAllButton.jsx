import showAllIcon from "../../assets/bars-arrow-down.svg"

export default function ShowAllButton({ onClick, quantity }) {
    return (
        <p
            className="cursor-pointer rounded-md inline-flex items-center gap-1 px-1.5 py-1 text-xs text-slate-700 bg-slate-300 hover:bg-slate-400"
            onClick={onClick}
        >
            <img className="h-4 w-4" src={showAllIcon} alt="Show All Icon" />
            show all {quantity}
        </p>
    )
}