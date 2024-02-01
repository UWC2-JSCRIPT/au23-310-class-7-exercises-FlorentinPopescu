/* --------------------------------------- */
const RESULT_VALUES = {
    w: 3,
    d: 1,
    l: 0
};

/* --------------------------------------- */
const getPointsFromResult = result => {
    /** This function accepts one argument, the result, which should be a string
     * Acceptable values are 'w', 'l', or 'd'
     */

    if (typeof result === "string" &&  Object.keys(RESULT_VALUES).includes(result)) {
        return RESULT_VALUES[result];
    } else {
        return 0;
    }
};

/* --------------------------------------- */
const getTotalPoints = resultsString => {
    /** Create getTotalPoints function which accepts a string of results
     * including wins, draws, and losses i.e. 'wwdlw'
     * Returns total number of points won
     */
    if (typeof resultsString === "string") {
        const results = resultsString.split('');

        let totalPoints = 0;

        results.forEach(function (result) {
            totalPoints += getPointsFromResult(result);
        });

        return totalPoints;
    } else {
        return 0;
    }
};

/* --------------------------------------- */
const orderTeams = (...teams) => {
    /** create orderTeams function that accepts as many team objects as desired,
     * each argument is a team object in the format { name, results }
     * i.e. {name: 'Sounders', results: 'wwlwdd'}
     * Logs each entry to the console as "Team name: points"
     */

    let standingsString = '';

    teams.forEach(function (team, i) {
        const points = getTotalPoints(team.results);
        standingsString += `${team.name}: ${points}`;
        if (i !== teams.length - 1) {
            standingsString += '\n';
        }
    });

    console.log(standingsString);
    return standingsString;
};

/* --------------------------------------- */
orderTeams({name: 'Sounders', results: 'wwlwdd'},
                  {name: 'Florentin', results: 'wwlwddw'},
                  {name: 'Gonzo', results: 'wwlwwdw'}
);
