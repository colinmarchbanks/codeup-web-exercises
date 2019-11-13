
function wait(num){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number" && num > 0) {
                resolve(`This will show in ${num} seconds`);
            } else {
                reject('Not a valid number');
            }
        }, num * 1000);
    });
}

wait(5).then(message => console.log(message));
wait(10).then(message => console.log(message));


const users = fetch('https://api.github.com/users', {headers: {'Authorization': `token ${githubToken}`}}).then( response => response.json());

function getNewestGithubUserCommit(username) {
    return fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${githubToken}`}})
        .then(response => response.json());
}

getNewestGithubUserCommit('colinmarchbanks').then((events) => {
    let newCommit = events.find(function (event) {
        return event.type === "PushEvent";
    });
    console.log(`The newest commit was made at ${newCommit.created_at}`);
}).catch(error => console.error(error));



