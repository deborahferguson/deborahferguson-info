export default function AcademicPosition({ period, title, university, advisors }) {
    const advisorOrAdvisors = advisors && advisors.includes(",") ? "advisors" : "advisor"

    return (
        <div>
            <p className="font-semibold text-xl">
                {title}
                <span className="ml-1 text-sm text-slate-500">{period}</span>
            </p>
            <p>{university}</p>
            {
                advisors &&
                <p>
                    <span className="mr-1">
                        {advisorOrAdvisors}:
                    </span>
                    {advisors}
                </p>
            }
        </div>
    )
}