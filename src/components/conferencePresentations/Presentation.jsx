import globeAltImg from "../../assets/globe-alt.svg"
import globeAmericasImg from "../../assets/globe-americas.svg"
import globeAsiaAustraliaImg from "../../assets/globe-asia-australia.svg"
import globeEuropeAfricaImg from "../../assets/globe-europe-africa.svg"
import conferenceImg from "../../assets/building-office-2.svg"
import oneContributorImg from "../../assets/user.svg"
import twoContributorsImg from "../../assets/users.svg"
import manyContributorsImg from "../../assets/user-group.svg"
import ContinentIcon from "./ContinentIcon.js"


export default function Presentation({title, date, contributors, conference, location, continentIcon}) {

    const numCommas = contributors.split(",").length - 1
    const isEtAl = contributors.includes("et al.")

    let contributorImg
    if (numCommas >= 2 || isEtAl) {
        contributorImg = manyContributorsImg
    } else if (numCommas === 1) {
        contributorImg = twoContributorsImg
    } else {
        contributorImg = oneContributorImg
    }


    let globeImg
    switch (continentIcon) {
        case ContinentIcon.AFRICA:
            globeImg = globeEuropeAfricaImg
            break
        case ContinentIcon.AMERICAS:
            globeImg = globeAmericasImg
            break
        case ContinentIcon.ASIA:
            globeImg = globeAsiaAustraliaImg
            break
        case ContinentIcon.AUSTRALIA:
            globeImg = globeAsiaAustraliaImg
            break
        case ContinentIcon.EUROPE:
            globeImg = globeEuropeAfricaImg
            break
        default:
            globeImg = globeAltImg
    }

    return (
        <div className="mt-2 mb-2">
            <p className="font-semibold text-xl">
                {title}
                <span className="ml-1 text-sm text-slate-500">{date}</span>
            </p>
            <p className="flex items-center">
                <img className="h-5 w-5 mr-1" src={contributorImg} alt="Contributors Icon"/>
                {contributors}
            </p>
            <p className="flex items-center">
                <img className="h-5 w-5 mr-1" src={conferenceImg} alt="Conference Icon"/>
                {conference}
            </p>
            <p className="flex items-center">
                <img className="h-5 w-5 mr-1" src={globeImg} alt="Location Icon"/>
                {location}
            </p>
        </div>
    )
}