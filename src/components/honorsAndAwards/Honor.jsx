import ReadArticleButton from "./ReadArticleButton.jsx"

export default function Honor({year, name, authority, articleUrl}) {
    return (
        <div className="mt-2 mb-2">
            <p className="font-semibold text-xl">
                {name}
                <span className="ml-1 text-sm text-slate-500">{year}</span>
            </p>
            <p>{authority}</p>
            {articleUrl && <ReadArticleButton articleUrl={articleUrl}/>}
        </div>
    )
}