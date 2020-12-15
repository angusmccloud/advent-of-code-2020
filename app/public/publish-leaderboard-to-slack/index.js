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
    // leaderboard.sort((a, b) => (a.local_score < b.local_score) ? 1 : -1); // Matched AoC Sort logic, I'm adding my own logic below
    leaderboard.sort(function (a, b) {
        if (a.stars === b.stars) {
            return b.local_score - a.local_score;
        }
        return a.stars < b.stars ? 1 : -1;
    });

    const emojis = {
        complete: ':star:',
        incomplete: ':time-turner:',
        notStarted: ':heavy_multiplication_x:',
        1: ':first_place_medal:',
        2: ':second_place_medal:',
        3: ':third_place_medal:'
    };

    const endDate = new Date(2020, 11, 25);
    const dt = new Date();
    let daysInChallenge = 0;
    if (dt > endDate) {
        daysInChallenge = 25;
    } else {
        daysInChallenge = dt.getDate();
    }

    let blocks = [];
    let message = '*Advent of Code 2020 Leaderboard*';
    for (let i = 0; i < leaderboard.length; i++) {
        const record = leaderboard[i];
        const score = record.local_score;
        const name = record.name;
        const completionData = record.completion_day_level;
        let complete = 0;
        let incomplete = 0;
        for (let ii = 1; ii <= daysInChallenge; ii++) {
            let thisStar;
            if (completionData[ii] === undefined) {
                thisStar = emojis['notStarted'];
            } else {
                if (completionData[ii][2] === undefined) {
                    thisStar = emojis['incomplete'];
                    incomplete ++;
                } else {
                    thisStar = emojis['complete'];
                    complete ++;
                }
            }
        }
        let string = '\n';
        if(complete > 0) {
          string += `${emojis['complete']}${complete}\t`;
          if(complete < 10){
            string += '  ';
          }
        } else {
          string += '\t\t\t';
        }

        if(incomplete > 0) {
          string += `${emojis['incomplete']}${incomplete}\t`;
        } else {
          string += '\t\t\t';
        }
        string += `(${score} pts)`;
        if(score < 10) {
          string += `    `;
        } else if (score < 100) {
          string += `  `;
        }
        string += `\t*${name}*`;

        message += string;
    }

    blocks.push({
        type: 'section',
        text: {
            type: 'mrkdwn',
            text: message
        }
    });

    blocks.push({
        type: 'divider'
    });
    blocks.push({
        type: 'section',
        text: {
            type: 'mrkdwn',
            text: `Visit <https://adventofcode.com/|Advent of Code> and join the Leaderboard ${process.env.AOC_LEADERBOARD}`
        }
    });

    return callback(null, {
        statusCode: 200,
        body: JSON.stringify({
            response_type: 'in_channel',
            blocks: blocks
        })
    });
};
