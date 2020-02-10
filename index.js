const util = require('util');
const { otherExperiment } = require('./otherExperiment')
const { homePageExperiment } = require('./homePageExperiment')

const cstmAttrs = {
    userId: 338123,
    eiIsFree100: true,
    eiIsTrial40k: true,
    eiIsPro: true,
    eiIsEssentials: true,
    mcIsPaid: true,
    isVerified: true,
    isAntiSpoofed: true,
};

// This is the config for all active experiments
const experiments = [homePageExperiment, otherExperiment];

// get experiments that the user is eligible for
const eligibleExperiments = experiments.filter((exp) => {
    // the user should fall into ALL audiences defined for an experiment
    // this could either be an 'every' if we want the user in all audiences or a 'some' if they can be in any of them
    return exp.audiences.every((aud) => {
        return aud.conditions(cstmAttrs);
    });
});

// derive active experiment variations from eligible experiments
const activeExperiments = eligibleExperiments.map((exp) => {
    // pass in bucketKey to be hashed
    const variation = exp.bucket(`${cstmAttrs.userId}_${exp.id}`);
    return Object.assign({}, exp, { variation });
});

// TODO: set active experiments in localstorage
// then on the page you want to have the experiment
//   - check local storage for the experiment in question and do things based on its variation property
// TODO: error handling (maybe use try catches for all this)
// TODO: come up with test cases

console.log("=================\nACTIVE EXPERIMENTS:\n=================\n", util.inspect(activeExperiments, false, null, true));
