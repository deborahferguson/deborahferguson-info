import ContinentIcon from "../conferencePresentations/ContinentIcon"
import calendarImg from "../../assets/calendar-days.svg"
import globeAltImg from "../../assets/globe-alt.svg"
import globeAmericasImg from "../../assets/globe-americas.svg"
import globeAsiaAustraliaImg from "../../assets/globe-asia-australia.svg"
import globeEuropeAfricaImg from "../../assets/globe-europe-africa.svg"
import presentationImg from "../../assets/presentation-chart-bar.svg"
import venueImg from "../../assets/building-office-2.svg"

export default function Talk({ title, date, venue, location, continentIcon }) {

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
        <div className="my-2">
            <p className="font-semibold text-xl">{venue}</p>
            <p className="flex">
                <img className="h-5 w-5 mt-1 mr-1" src={presentationImg} alt="Presentation Icon" />
                {title}
            </p>
            <p className="flex items-center">
                <img className="h-5 w-5 mr-1" src={calendarImg} alt="Date Icon" />
                {date}
                </p>
            <p className="flex items-center">
                <img className="h-5 w-5 mr-1" src={globeImg} alt="Location Icon" />
                {location}
            </p>
        </div>
    )
}