'use strict';
const AWS = require('aws-sdk');

const getLeaderboardJSON = require('../../functions/get-leaderboard');

module.exports.get = async (event, context, callback) => {
    /** Immediate response for WarmUP plugin so things don't keep running */
    if (event.source === 'serverless-plugin-warmup') {
        console.log('WarmUP - Lambda is warm!')
        return callback(null, 'Lambda is warm!')
    }

    const leaderboardData = await getLeaderboardJSON();
    let leaderboard = [];
    const keys = Object.keys(leaderboardData.members);
    for (let i = 0; i < keys.length; i++) {
        const record = leaderboardData.members[keys[i]];
        leaderboard.push(record);
    }

    leaderboard.sort((a, b) => (a.local_score < b.local_score) ? 1 : -1);
    let message = '*Advent of Code 2020 Leaderboard*';
    let rank = 0;
    let lastScore = -1;
    for (let i = 0; i < leaderboard.length; i++) {
        const record = leaderboard[i];
        const score = record.local_score;
        const stars = record.stars;
        const name = record.name;
        if (score !== lastScore) {
            rank = i + 1;
        }
        lastScore = score;

        let rankText = `${rank})  `;
        if (rank === 1) {
            rankText = ':first_place_medal:';
        } else if (rank === 2) {
            rankText = ':second_place_medal:';
        } else if (rank === 3) {
            rankText = ':third_place_medal:';
        }

        message = message + `\n${rankText}${name} with ${score} points and ${stars} stars`;
    }

    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            response_type: 'in_channel',
            blocks: [
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: message
                    }
                },
                {
                    type: 'divider'
                },
                {
                    type: 'section',
                    text: {
                        type: 'mrkdwn',
                        text: `Visit <https://adventofcode.com/|Advent of Code> and join the Leaderboard ${process.env.AOC_LEADERBOARD}`
                    }
                }
            ]
        })
    });
};
