// // Use your knowledge of array iteration,
// // and object property dot notation to
// // answer the following questions about the data.

// // How many total commits were made
// // in all of Steve's events?
 let stevepayload = 0;
 let totalcommits = 0;
 console.log(githubData.length);
 for (var i = 0; i < githubData.length; i++) {
   stevepayload = githubData[i].payload.distinct_size;
   totalcommits = totalcommits + stevepayload;
   console.log(totalcommits);
}
console.log(githubData);

// const studentsAge = [17, 16, 18, 19, 21, 17];
// const ableToDrink = studentsAge.filter( age => age > 18 );
// ableToDrink will be equal to [19, 21]


// // githubData.payload.commits.author.name  "name": "Steve Brownlee"
// // How many of each event type are there?
// // (PullRequestEvent, PushEvent, etc)
// // PushEvent
// // PullRequestEvent
// // User
// // Organization
// // DeleteEvent
// // IssueCommentEvent
// // CreateEvent

// let steve = "";
//  console.log(githubData.length);
//  for (var i = 0; i < githubData.length; i++) {
//    steve = githubData[i].type;
//    console.log(steve);
// }

// console.log(githubData);

// // List all Github users who submitted a
// // pull request that was approved by Steve.
// // ???? "type": "PullRequestEvent" and "login": "stevebrownlee"

// // List all repositories on which Steve had an event,
// // and show how many events were on each one.

// // Which event had the most number of commits?

// // Which programming langugages were affected by Steve's events?

// // What programming language was the most
// // affected by Steve's events?hs 

