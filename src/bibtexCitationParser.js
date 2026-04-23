/**
 * Given a string containing an iNSPIRE HEP BibTeX citation string,
 * parses and returns the information in JSON.
 * 
 * Example iNSPIRE HEP BibTeX citation:
 * @article{LISAConsortiumWaveformWorkingGroup:2023arg,
 *   author = "Afshordi, Niayesh and others",
 *   collaboration = "LISA Consortium Waveform Working Group",
 *   title = "{Waveform modelling for the Laser Interferometer Space Antenna}",
 *   eprint = "2311.01300",
 *   archivePrefix = "arXiv",
 *   primaryClass = "gr-qc",
 *   doi = "10.1007/s41114-025-00056-1",
 *   journal = "Living Rev. Rel.",
 *   volume = "28",
 *   number = "1",
 *   pages = "9",
 *   year = "2025"
 * }
 * 
 * Example JSON:
 * {
 *   
 * }
 * 
 * @param {*} bibtexCitation 
 */
export default function parseCitation(bibtexCitation) {
    const citationLines = bibtexCitation.split("\n")

    let citationJson = {}
    for (const line of citationLines) {
        const trimmedLine = line.trim()

        if (trimmedLine.startsWith("author")) {
            citationJson.author = parseAuthorLine(trimmedLine)
        } else if (trimmedLine.startsWith("title")) {
            citationJson.title = parseTitleLine(trimmedLine)
        } else if (trimmedLine.startsWith("collaboration")) {
            citationJson.collaboration = parseCollaborationLine(trimmedLine)
        } else if (trimmedLine.startsWith("eprint")) {
            const eprint = parseEprintLine(trimmedLine)
            citationJson.arxivUrl = `https://arxiv.org/abs/${eprint}`
        } else if (trimmedLine.startsWith("doi")) {
            const doi = parseDoiLine(trimmedLine)
            citationJson.doiUrl = `https://doi.org/${doi}`
        } else if (trimmedLine.startsWith("year")) {
            citationJson.year = parseYearLine(trimmedLine)
        } else if (trimmedLine.startsWith("journal")) {
            citationJson.journal = parseJournalLine(trimmedLine)
        }
    }
    return citationJson
}

/**
 * Parse the author information from an iNSPIRE HEP BibTeX author line.
 * 
 * Scenarios:
 * A) Single author
 *   input: `author = "Ferguson, Deborah",`
 *   output: "Deborah Ferguson"
 * B) Two authors
 *   input: `author = "Ferguson, Deborah and Shoemaker, Deirdre"`
 *   output: "Deborah Ferguson, Deirdre Shoemaker"
 * C) All authors included, separated by "and"
 *   input: `author = "Kang, Karen and Miller, Simona J. and Chatziioannou, Katerina and Ferguson, Deborah",`
 *   output: "Karen Kang, Simona J. Miller, Katerina Chatziioannou, Deborah Ferguson"
 * D) Single author included, followed by "and others"
 *   input: `author = "Afshordi, Niayesh and others",`
 *   output: "Niayesh Afshordi, et al."
 *  
 * @param {*} authorLine 
 */
function parseAuthorLine(authorLine) {
    // Extract the author string from the line (between quotes)
    const match = authorLine.match(/author = "([^"]+)"/)

    const authorString = match[1].trim()

    // Case D: "and others" - return first author + "et al."
    if (authorString.includes("and others")) {
        const firstAuthor = authorString.replace(" and others", "").trim()
        const [lastName, firstName] = firstAuthor.split(", ").map(s => s.trim())
        return `${firstName} ${lastName}, et al.`
    }

    // Split by " and " to get individual authors
    const authors = authorString.split(" and ").map(s => s.trim())

    // Parse each author: convert "LastName, FirstName" to "FirstName LastName"
    const parsedAuthors = authors.map(author => {
        const [lastName, firstName] = author.split(", ").map(s => s.trim())
        return `${firstName} ${lastName}`
    })

    return parsedAuthors.join(", ")
}

function parseTitleLine(titleLine) {
    const mSun = "M_⊙"
    return titleLine
        .replace("title = \"{", "")
        .replace("}\",", "")
        .replaceAll("{\textendash}", "–")
        .replaceAll("{\textquoteright}", "'")
        .replaceAll("M $_{⊙}$", mSun)
        .replaceAll("M$_odot$", mSun)
        .replaceAll(/\$(\d+)\s*M_{\odot}\$/g, `$1 ${mSun}`)
        .replaceAll("Milky~Way", "Milky Way")
}

/**
 * Scenarios:
 * A) Single Collaboration
 *   input: `collaboration = "LIGO Scientific"`
 *   output: "LIGO Scientific Collaboration"
 * B) Two Collaborations
 *   input: `collaboration = "LIGO Scientific, Virgo"`
 *   output: "LIGO Scientific and Virgo Collaborations"
 * C) Mutlitple collaborations
 *   input: `collaboration = "LIGO Scientific, Virgo, KAGRA"`
 *   output: "LIGO Scientific, Virgo, and KAGRA Collaborations"
 * 
 * Caveats:
 * "LISA Consortium Waveform Working Group" stays as-is and does not get
 * the word "Collaboration" tacked on it.
 * @param {*} collaborationLine 
 */
function parseCollaborationLine(collaborationLine) {
    // Extract the collaboration string from the line (between quotes)
    const match = collaborationLine.match(/collaboration = "([^"]+)"/)

    const collaborationString = match[1].trim()

    // Caveat: LISA Consortium Waveform Working Group stays as-is
    if (collaborationString === "LISA Consortium Waveform Working Group") {
        return collaborationString
    }

    // Split by comma to get individual collaborations
    const collaborations = collaborationString.split(",").map(s => s.trim())

    // Join with appropriate formatting and add "Collaboration(s)"
    if (collaborations.length === 1) {
        return `${collaborations[0]} Collaboration`
    } else if (collaborations.length === 2) {
        return `${collaborations[0]} and ${collaborations[1]} Collaborations`
    } else {
        return collaborations
            .slice(0, -1)
            .join(", ")
            + ", and "
            + collaborations[collaborations.length - 1]
            + " Collaborations"
    }
}

function parseEprintLine(eprintLine) {
    return eprintLine
        .replace("eprint = \"", "")
        .replace("\",", "")
}

function parseDoiLine(doiLine) {
    return doiLine
        .replace("doi = \"", "")
        .replace("\",", "")
}

function parseYearLine(yearLine) {
    return yearLine
        .replace("year = \"", "")
        .replace("\"", "")
        .replace(",", "")
}

function parseJournalLine(journalLine) {
    return journalLine
        .replace("journal = \"", "")
        .replace("\",", "")
}
