import Section from "../Section.jsx"
import SectionName from "../SectionName.jsx"
import {CONTACT_INFO} from "../../data/contactInfo.js"

export default function ContactSection() {
    const city = CONTACT_INFO.address.city
    const state = CONTACT_INFO.address.state
    const zip = CONTACT_INFO.address.zip

    return (
        <Section>
            <SectionName name="Contact"/>
            <p className="font-semibold">{CONTACT_INFO.address.name}</p>
            <p>{CONTACT_INFO.address.street}</p>
            <p className="mb-2">{city + ", " + state + " " + zip}</p>
            <p>{CONTACT_INFO.email}</p>
        </Section>
    )
}
