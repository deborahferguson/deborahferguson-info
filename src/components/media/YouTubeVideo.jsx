export default function YouTubeVideo({title, src}) {
    return (
        <iframe
            className="aspect-video w-full rounded-xl hover:scale-101"
            title={title}
            src={src}
            allowFullScreen
        >
        </iframe>
    )
}
