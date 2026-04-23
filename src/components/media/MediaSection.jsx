import { YOUTUBE_VIDEOS } from "../../data/youtubeVideos.js"
import YouTubeVideo from "./YouTubeVideo.jsx"
import SectionName from "../SectionName.jsx"
import Section from "../Section.jsx"

export default function MediaSection() {
    const youTubeVideos = YOUTUBE_VIDEOS.map(
        video => (
            <YouTubeVideo key={video.src} {...video} />
        )
    )

    return (
        <Section>
            <SectionName name="Media" />
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
                {youTubeVideos}
            </div>
        </Section>
    )
}
