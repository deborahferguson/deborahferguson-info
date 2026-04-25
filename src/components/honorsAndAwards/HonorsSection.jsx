import {HONORS} from "../../data/honors.js"
import Honor from "./Honor.jsx"
import CollapsibleSection from "../CollapsibleSection";

export default function HonorsSection() {
    const honors = HONORS.map(honor => (
            <Honor
                key={honor.year + "|" + honor.name}
                {...honor}
            />
        )
    )
    return (
        <CollapsibleSection
            name="Honors and Awards"
            items={honors}
            gridClassName="grid sm:grid-cols-1 md:grid-cols-2 gap-2"
            itemsToShowInitially={4}
        />
    )
}