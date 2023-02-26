const axios = require('axios');

module.exports = async function (context, myTimer) {
    var timeStamp = new Date().toISOString();
    
    if (myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('JavaScript timer trigger function ran!', timeStamp);

    try {
        const res = await axios.get('https://www.canada.ca/content/dam/ircc/documents/json/ee_rounds_123_en.json');

        const lastModifiedDate = res.headers && res.headers['last-modified'] ? res.headers['last-modified'] : 'no last modified date';
        context.log('Status Code:', res.status);
        context.log('Last modified in Response header:', lastModifiedDate);

        const roundsData = res.data;
        const firstRound = roundsData.rounds ? roundsData.rounds[0] : null;
        if (firstRound) {
            const invitations_issued = firstRound.drawSize;
            const lowest_score = firstRound.drawCRS;
            const round_date = firstRound.drawDate;

            context.log(`Invitations issued: ${invitations_issued}, lowest score: ${lowest_score}, date: ${round_date}`);

        }
    } catch (error) {
        context.log(error);
    }
};