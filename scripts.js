// Use your knowledge of array iteration,
// and object property dot notation to
// answer the following questions about the data.

// ********** CTRL F ********** lets me search for word "commits" 
// pay attention to if it is a key with quote marks or just the word.

//     **********  1  **********
// How many total commits were made
// in all of Steve's events?
let totalCommits = 0;
githubData.forEach(taco => {
  if (taco.type === "PushEvent") {
    // This counts the number of items in the commit array for each object
    totalCommits += taco.payload.commits.length;
    // This increments the total
    console.log('Commits for this object: ', taco.payload.commits.length, 'Total Commits: ', totalCommits)
    //This loops through the commits array within the larger gitHubData array
    //and returns the author's name
    commitsArray = taco.payload.commits;
    commitsArray.forEach(his => {
      console.log(his.author.name);
    }) 
  }
});

//     **********  2  **********
// How many of each event type are there?

let pushEventArray = [];
let pullRequestEventArray =[]
let deleteEventArray = []
let issueCommentEventArray = []
let createEventArray = []

let arrayOfEvents = [];
githubData.forEach(taco => {
  //for each object push the event type into the compositearrayOfEvents
  arrayOfEvents.push(taco.type);
  if (taco.type === "PushEvent") {
    pushEventArray.push(taco.type);
  } else if (taco.type === "PullRequestEvent") {
    pullRequestEventArray.push(taco.type);
  } else if (taco.type === "DeleteEvent") {
    deleteEventArray.push(taco.type);
  } else if (taco.type === "IssueCommentEvent") {
    issueCommentEventArray.push(taco.type);
  } else if (taco.type === "CreateEvent") {
    createEventArray.push(taco.type);
  }  
})
console.log("PushEvent: " +  pushEventArray.length);
console.log("PullRequestEvent: " +  pullRequestEventArray.length);
console.log("DeleteEvent: " +  deleteEventArray.length);
console.log("IssueCommentEvent: " +  issueCommentEventArray.length);
console.log("CreateEvent: " +  createEventArray.length);
//To check the 5 event totals
console.log(arrayOfEvents);

// ***********  This seemed to work too  **********
//Creating a function that returns an array where the type = "PushEvent"
//and then filtering the main array with that function
function pushEvent2(type) {
  return type === "PushEvent";
}
console.log("pushEvent2 Function Results: " + arrayOfEvents.filter(pushEvent2).length);


// THIS WAS EMILY'S SOLUTION
let eventTypes = {
  PushEvent: 0,
  PullRequestEvent: 0,
  IssueCommentEvent: 0,
  DeleteEvent: 0,
  CreateEvent: 0,
}
eventTypes.songs = 0;
githubData.forEach(stevent => {
  eventTypes[stevent.type] += 1;
})
console.log("event types and their totals", eventTypes);


//     **********  3  **********
// List all Github users who submitted a pull request that was approved by Steve.
// searched for "pull ... then "pull_request"
// Under actor, the login is always stevebrownlee but it varies under
//path gitHubData.payload.pull_request.user.login
let gitHubUsers =[];
githubData.forEach(taco => {
  if (taco.type === "PullRequestEvent" && taco.payload.pull_request.user.login !== "stevebrownlee") {
    gitHubUsers.push(taco.payload.pull_request.user.login);
    }
  });
console.log("GitHub Useres approved by Steve: ", gitHubUsers);  //test
   

// THIS WAS EMILY'S SOLUTION - She included Steve - Note her .includes

let approvedUsers = [];
githubData.forEach(literallyAnything => {
  if (literallyAnything.type === "PullRequestEvent") {
    if (!approvedUsers.includes(literallyAnything.payload.pull_request.user.login)) {
      approvedUsers.push(literallyAnything.payload.pull_request.user.login);
    }
  }
})
console.log('approved users:', approvedUsers);


//     **********  4  **********
// List all repositories on which Steve had an event,
// and show how many events were on each one.
let repoArray = [];
githubData.forEach(taco => {
  //console.log(taco.actor.login) //test to see if Steve is associated with every object
  repoArray.push(taco.repo.name);
  console.log(taco.repo.name);
});


//THIS WAS EMILY'S SOLUTION ********** Using name of key to count!!!!!!!!!
let reposEvents = {
  "nashville-software-school/bangazon-llc": 0,
  "nss-day-cohort-27/brenda-snack-cake-store": 0,
  "nashville-software-school/client-side-mastery": 0,
  "stevebrownlee/vps-setup": 0
}
githubData.forEach(eventObj => {
  // console.log('repo name', eventObj.repo.name);
  reposEvents[eventObj.repo.name] ++;
})
console.log('repos and their events', reposEvents);


//     **********  5  **********
// Which event had the most number of commits?

let eventCommits = 0;
githubData.forEach(taco => {
 if (taco.type === "PushEvent") {
 // console.log(taco.id); // to discover the universe of Id's
  eventCommits += taco.payload.commits.length;
 // console.log(eventCommits);
  console.log('Commits for ID:', taco.id, taco.payload.commits.length)
  commitsArray = taco.payload.commits;
  // another .forEach to loop thru commits
  commitsArray.forEach(his => {
        console.log(his.author.name);
    })
  }
});

//THIS WAS EMILY'S SOLUTION
let eventsCommits = {}

githubData.forEach(githubEvent => {
  if (githubEvent.type === "PushEvent") {
    console.log("The event id as string", githubEvent.id, "commits length", githubEvent.payload.commits.length)
    eventsCommits[githubEvent.id] = githubEvent.payload.commits.length;
  }
})

console.log('events and their commits', eventsCommits);

//     **********   6 **********
// Which programming langugages were affected by Steve's events?

// repo.language is a different repo than beginning of array object
// taco.payload.pull_request.repo.language

githubData.forEach(taco => {
  if (taco.type === "PullRequestEvent") {
  console.log(taco.payload.pull_request.base.repo.language);
  }
});

//THIS WAS EMILY'S SOLUTION - Mine did not work without her if statement
// Did not make the association between the type matching "pullRequestEvent"
//and the language property being missing in the object

//payload -> pull_request ->  head -> repo -> langauge
githubData.forEach(stevent => {
  if (stevent.type === "PullRequestEvent") {
    console.log('language?', stevent.payload.pull_request.base.repo.language);
  }
})

//     **********  7  **********
// What programming language was the most
// affected by Steve's events?

// Javascript = 5 Python = 2