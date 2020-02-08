const util = require('util');
const { otherExperiment } = require('./otherExperiment')
const { homePageExperiment } = require('./homePageExperiment')

const cstmAttrs = {
    userId: 368205,
    eiIsFree100: true,
    eiIsTrial40k: true,
    eiIsPro: true,
    eiIsEssentials: true,
    mcIsPaid: true,
    isVerified: false,
    isAntiSpoofed: false,
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

// =============================================================================================
// =============================================================================================
// =============================================================================================
// =============================================================================================

const optimizelyExperiment = {
    "id": 3000,
    "description": "string",
    "key": "home_page_experiment",
    "name": "Blue Button Experiment",
    "audience_conditions": "[\"and\", {\"audience_id\": 7000}, {\"audience_id\":7001}]", // *

    // "project_id": 1000,
    // "feature_id": 1000,
    // "campaign_id": 2000,

    // "type": "a/b",
    // "status": "running",

    // "created": "2020-02-08T15:06:10.589Z",
    // "earliest": "2020-02-08T15:06:10.589Z",
    // "latest": "2020-02-08T15:06:10.590Z",
    // "last_modified": "2020-02-08T15:06:10.590Z",

    // "holdback": 5000,
    // "is_classic": false,
    // "feature_key": "string",
    // "results_token": "string",
    // "traffic_allocation": 5000,
    // "allocation_policy": "string",
    // "multivariate_traffic_policy": "full_factorial",

    // "changes": [
    //     {
    //         "type": "custom_code",
    //         "value": "window.someGlobalFunction();",
    //         "async": true,
    //         "dependencies": [
    //         "993fd09c-b64a-4c13-95a9-13b3ed2c454e",
    //         "95cf0144-fb63-431d-829b-193fe55ada18"
    //         ],
    //         "name": "Setting button text",
    //         "selector": "head",
    //         "id": "string",
    //         "src": "string"
    //     }
    // ],
    // "environments": {
    //     "staging": {
    //         "status": "running"
    //     }
    // },
    // "metrics": [
    //     {
    //         "aggregator": "unique",
    //         "event_id": 0,
    //         "field": "revenue",
    //         "scope": "session",
    //         "winning_direction": "increasing"
    //     }
    // ],
    // "page_ids": [
    //     0
    // ],
    // "schedule": {
    //     "start_time": "2019-02-20T15:00",
    //     "stop_time": "2019-02-20T18:00",
    //     "time_zone": "America/New_York"
    // },
    // "url_targeting": {
    //     "conditions": "[\"and\", {\"type\": \"url\", \"match_type\": \"substring\", \"value\": \"optimize\"}]",
    //     "edit_url": "https://www.optimizely.com",
    //     "activation_code": "function callbackFn(activate, options) { activate(); }",
    //     "activation_type": "callback",
    //     "key": "home_page",
    //     "page_id": 6700
    // },
    "variations": [
        {
            "weight": 0,
            "variation_id": 0,
            "name": "Blue Button",
            "description": "string",
            "key": "blue_button_variation",
            // "actions": [
            //     {
            //         "page_id": 0,
            //         "changes": [
            //             {
            //                 "type": "attribute",
            //                 "allow_additional_redirect": true,
            //                 "async": true,
            //                 "attributes": {
            //                     "class": "intro",
            //                     "hide": true,
            //                     "href": "example.com",
            //                     "html": "New Title",
            //                     "remove": true,
            //                     "src": "song.mp3",
            //                     "style": "background-color:blue;",
            //                     "text": "Some nice message"
            //                 },
            //                 "config": "{\"name\": \"Flash Sale Today!\", \"color\": \"blue\"}",
            //                 "css": {
            //                     "background-color": "string",
            //                     "background-image": "string",
            //                     "border-color": "string",
            //                     "border-style": "string",
            //                     "border-width": "string",
            //                     "color": "string",
            //                     "font-size": "string",
            //                     "font-weight": "string",
            //                     "height": "string",
            //                     "position": "string",
            //                     "width": "string"
            //                 },
            //                 "dependencies": [
            //                     "ad1f6acb-78f2-4653-b955-913abd777e16",
            //                     "ad20a6dd-2083-4964-8ed2-f0dc7baef687"
            //                 ],
            //                 "destination": "https://app.optimizely.com/",
            //                 "destination_function": "https://app.optimizely.com/",
            //                 "name": "Setting button text",
            //                 "operator": "after",
            //                 "preserve_parameters": true,
            //                 "rearrange": "{\"insertSelector\": \".greyBox\", \"operator\": \"before\"}",
            //                 "selector": "a[href*=\"optimizely\"]",
            //                 "value": "window.someGlobalFunction();",
            //                 "extension_id": "string",
            //                 "id": "string",
            //                 "src": "string"
            //             }
            //         ],
            //         "shargge_link": "string"
            //     }
            // ],
            // "archived": true,
            // "feature_enabled": true,
            // "status": "active",
            // "variable_values": {
            //     "key": "string"
            // },
        }
    ],
    // "whitelist": [
    //     {
    //         "user_id": "user_1",
    //         "variation_id": 12345
    //     }
    // ],
};

const optimizelyAudience = {
    "id": 5000,
    "name": "Spanish speaking San Franciscans",
    "description": "People that speak spanish and are in San Francisco",
    "conditions": "[\"and\", {\"type\": \"language\", \"value\": \"es\"}, {\"type\": \"location\", \"value\": \"US-CA-SANFRANCISCO\"}]",
    // "project_id": 1000,
    // "archived": false,
    // "is_classic": true,
    // "segmentation": false,
    // "created": "2020-02-08T15:06:10.636Z",
    // "last_modified": "2020-02-08T15:06:10.636Z"
}