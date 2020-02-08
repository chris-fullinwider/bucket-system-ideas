const { otherAudience } = require('./audiences');
const { roll } = require('./roll');

/**
 * Using the userId and experimentId, bucket the user into a variation
 *  - updates calling experiment's variation property
 * @param {string} bucketKey used to create random number to assign variation
 * @returns {object} variation object
 */
const otherBucket = (bucketKey) => {
    console.log(roll)
    const variationAssignment = roll(bucketKey);
    console.log("=================\nVARIATION ASSIGNMENT: ", variationAssignment, "\n=================");
    if (variationAssignment <= 0.333333) {
        console.log("=================\nBUCKETED INTO CONTROL\n=================");
        return {
            name: "control",
            id: "other_experiment_control",
            description: "this variation has no effect on the ui",
        };
    }

    if (variationAssignment <= 0.666666) {
        console.log("=================\nBUCKETED INTO VARIATION 1\n=================");
        return {
            name: "box shadow",
            id: "other_experiment_variation_1",
            description: "this variation shows the user a sick box shadow",
        };
    }

    console.log("=================\nBUCKETED INTO VARIATION 2\n=================");
    return {
        name: "sick border",
        id: "other_experiment_variation_2",
        description: "this variation shows the user a sick border",
    };
};

const otherExperiment = {
    variation: null, // defaults to null --> is set during bucketing
    audiences: [otherAudience],
    bucket: otherBucket,
    id: "other_experiment",
    name: "other experiment",
    description: "determines if a box shadow is sick or not",
};

module.exports = {
    otherExperiment,
}