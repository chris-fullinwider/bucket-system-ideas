const md5 = require('md5')

/**
 * creates a hash based on bucketKey then converts the hash into a random number between 0 and 1
 *  - ALWAYS returns the same number given the same bucketKey
 * @param {string} bucketKey combination of userId and experimentId
 */
const roll = (bucketKey) => {
    console.log("BUCKET KEY: ", bucketKey)
    var mhash = md5(bucketKey);
    // convert hash into base 16 number (since the hash is a hex value)
    // divide by the hash size of md5 (2^128) to get a number between 0 and 1
    return parseInt(mhash, 16) / Math.pow(2,128);
};

module.exports = {
    roll,
}