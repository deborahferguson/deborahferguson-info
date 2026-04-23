import { INTRO } from "../../data/intro"
import Section from "../Section";
import profilePhoto from "../../assets/profile-photo.jpg"

export default function IntroSection() {
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-2 items-center mb-8">
            <div className="sm:col-span-1 lg:col-span-2">
                <Section>
                    <h1 className="text-4xl font-semibold mb-2">{INTRO.name}</h1>
                    <h2 className="text-2xl font-semibold mb-2">{INTRO.title}</h2>
                    <img className="block lg:hidden rounded-full h-auto w-auto max-w-xs max-h-xs mx-auto my-4" src={profilePhoto} alt="Profile Photo" />
                    <p>{INTRO.description}</p>
                </Section>
            </div>
            <div className="hidden lg:block lg:col-span-1 max-w-xs mx-auto">
                <img className="rounded-full h-auto w-auto max-h-xs" src={profilePhoto} alt="Profile Photo" />
            </div>
        </div>
    )
}