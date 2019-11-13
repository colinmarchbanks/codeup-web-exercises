const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let languages3 = users.filter(user => user.languages.length >=3);
console.log(languages3);

let emails = users.map(user => user.email);
console.log(emails);

let totalYears = users.reduce((accumulation,user) => {
    accumulation += user.yearsOfExperience;
    return accumulation;
},0);

let averageYearsOfExperience = totalYears/users.length;

console.log(totalYears);
console.log(averageYearsOfExperience);

let longestEmail = emails.reduce((longestLength,email) => {
    if(longestLength.length < email.length){
        longestLength = email;
    }
    return longestLength;
}, " ");

console.log(longestEmail);

let namesInString = users.reduce((string,user) => {
    string += user.name + " ";
    return string;
}, "Your instructors are: ");

console.log(namesInString);

const uniqueLanguages = users.reduce((languageList, user) => {
    user.languages.forEach(function (language) {
        if(!languageList.includes(language)){
            languageList.push(language)
        }});
    return languageList;
},[]);
console.log(uniqueLanguages);


