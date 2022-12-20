# Cricketstats

Cricketstats is an NPM Package especially for Cricket lovers where we can get all the details about cricket such as news, result, schedule.

## About

This web component works based on open-source api's provided by **RapidAPI**. It gets the real time data from these api's and displays it to the user as per user's query.


## Usage

1. Install the package to your project using the following command

~~~~ {.html}
npm install cricketstats
~~~~

1. Import the package in your project

~~~~ {.html}
import cricindex from 'cricketstats';
~~~~

## Example:

* `crickindex.news()` is the function to get all the news about cricket from across the world.

* `cricindex.fixtures()` is the function to get the all the upcoming fixtures.

* `crickindex.series()` is the function to get list of across the world in all the format.

* `cricindex.fixturesByDate('2021-11-17')` is the function to get the match details by date and it also includes domestic cricket and date in the format **(yyyy-mm-dd)**.

* `cricindex.resultsByDate('2021-11-17')` is the function to get all the match result on a particular date, example mentioned here on date **17th November 2021**.

* `cricindex.liveMatch()` is the function to get the live match details, but it does not provide live score of the match by ball by ball.
