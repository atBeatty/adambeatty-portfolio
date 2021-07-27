import TeamBoxScore from "../components/TeamBoxScore"


// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
    const cheerio = require('cheerio') // 1


    const response = await fetch(`https://www.espn.com/mlb/playbyplay/_/gameId/401228557`)
    const htmlString = await response.text()
    const $ = cheerio.load(htmlString)
    const allPlays = $('#allPlaysContainer section').first()
    return {
        props: {
            hello: "posts",
        },
        // Next.js will attempt to re-generate the page:
        // - When a request comes in
        // - At most once every 10 seconds
        revalidate: 10, // In seconds

    }

}



export default function Matchup() {

    <TeamBoxScore />

    return <div></div>
}