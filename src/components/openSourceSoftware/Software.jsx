import ViewOnGitHubButton from "./ViewOnGitHubButton.jsx"

export default function Software({name, description, github_url}) {
    return (
        <div>
            <p className="font-semibold text-xl">{name}</p>
            <p>{description}</p>
            {github_url && <ViewOnGitHubButton github_url={github_url}/>}
        </div>
    )
}