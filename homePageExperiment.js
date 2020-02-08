const { audience1 } = require('./audiences');
const { roll } = require('./roll');

/**
 * Using the userId and experimentId, bucket the user into a variation
 *  - updates calling experiment's variation property
 * @param {string} bucketKey used to create random number to assign variation
 * @returns {object} variation object
 */
const homePageBucket = (bucketKey) => {
    const variationAssignment = roll(bucketKey);
    console.log("=================\nVARIATION ASSIGNMENT: ", variationAssignment, "\n=================");
    if (variationAssignment <= 0.20) {
        console.log("=================\nBUCKETED INTO CONTROL\n=================")
        return {
            name: "control",
            id: "home_page_experiment_control",
            description: "this variation has no effect on the ui",
        };
    } else {
        console.log("=================\nBUCKETED INTO VARIATION\n=================")
        return {
            name: "blue button",
            id: "home_page_experiment_variation_1",
            description: "this variation shows the user a blue button instead of a shitty red one",
        };
    };
};

const homePageExperiment = {
    variation: null, // defaults to null --> is set during bucketing
    audiences: [audience1],
    bucket: homePageBucket,
    id: "home_page_experiment",
    name: "Blue Button Experiment",
    description: "determines if a blue button is better than a shitty red button",
};

module.exports = {
    homePageExperiment,
}