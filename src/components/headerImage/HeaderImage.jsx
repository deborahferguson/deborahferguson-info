import headerImage from "../../assets/header-image.png"
export default function HeaderImage() {
    return (
        <div className="flex justify-center mb-4">
            <img className="hidden md:block" src={headerImage} alt="Header Image of Black Holes Merging" />
        </div>
    )
}