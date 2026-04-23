export default function Degree({ degree, minors, year, university, advisor }) {
    return <div>
        <p className="text-xl font-semibold">
            {degree}
            <span className="ml-1 text-slate-500 text-sm">{year}</span>
        </p>
        {minors && <p>minors: {minors}</p>}
        <p>{university}</p>
        {advisor && <p>advisor: {advisor}</p>}
    </div>
}