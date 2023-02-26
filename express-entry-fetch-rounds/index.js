const axios = require('axios');

module.exports = async function (context, myTimer) {
    try {
        const res = await axios.get('https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json');

        const roundsData = res.data;
        const firstRound = roundsData.rounds ? roundsData.rounds[0] : null;

        if (firstRound) {
            const invitations_issued = firstRound.drawSize;
            const lowest_score = firstRound.drawCRS;
            const round_date = firstRound.drawDate;

            const output = `${round_date}\n${invitations_issued}\n${lowest_score}`;

            context.bindings.outputblob = output;
        }
    } catch (error) {
        context.log(error);
    }
};