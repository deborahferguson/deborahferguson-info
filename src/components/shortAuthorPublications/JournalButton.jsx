import { JOURNAL_ABBREVIATIONS, JOURNALS } from "../../domain/journals";

export default function JournalButton({ journal, doiUrl }) {
    let buttonCss = "text-xs border px-1 mr-1 "

    const prdRgb = "border-[rgb(0,83,139)] text-[rgb(0,83,139)] hover:bg-[rgb(0,83,139)] hover:text-white"
    const jossRgb = "border-[rgb(46,41,78)] text-[rgb(46,41,78)] hover:bg-[rgb(46,41,78)] hover:text-white"
    const cqgRgb = "border-[rgb(149,200,188)] text-[rgb(149,200,188)] hover:bg-[rgb(149,200,188)] hover:text-white"
    const prlRgb = "border-[rgb(0,180,141)] text-[rgb(0,180,141)] hover:bg-[rgb(0,180,141)] hover:text-white"
    const apjRgb = "border=[rgb(63,84,143)] text-[rgb(63,84,143)] hover:bg-[rgb(63,84,143)] hover:text-white"

    const journalAbbreviation = JOURNALS[journal]
    if (journalAbbreviation === JOURNAL_ABBREVIATIONS.PRD) {
        buttonCss += prdRgb
    } else if (journalAbbreviation === JOURNAL_ABBREVIATIONS.JOSS) {
        buttonCss += jossRgb
    } else if (journalAbbreviation === JOURNAL_ABBREVIATIONS.CQG) {
        buttonCss += cqgRgb
    } else if (journalAbbreviation === JOURNAL_ABBREVIATIONS.PRL) {
        buttonCss += prlRgb
    } else if (journalAbbreviation === JOURNAL_ABBREVIATIONS.APJ) {
        buttonCss += apjRgb
    }

    return (
        <a
            className={buttonCss}
            href={doiUrl}
            target="_blank"
            rel="noopener noreferrer"
        >
            {journalAbbreviation}
        </a>
    )
}