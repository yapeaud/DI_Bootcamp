// PARTIE 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength =(3);
const myWatchedSeriesSentence =("black mirror, money heist, and the big bang theory");
console.log('I watched '+myWatchedSeriesLength+ ' series ' +myWatchedSeriesSentence);

// PARTIE 2
myWatchedSeries.splice(2,1,'friends');

myWatchedSeries.push('24 Heures chrono');
myWatchedSeries.unshift('K-2000');
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1].substring(2,3));
console.log(myWatchedSeries);