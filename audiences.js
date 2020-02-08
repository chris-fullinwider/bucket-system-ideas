
const audience1 = {
    id: "audience_verified_antispoof_new_ei_paid_mc",
    name: "verified anti spoofed free100/trial40k/free100/essentials/pro ei plan and any paid MC plan",
    description: "homepage experiment audience",
    conditions: (cstmAttrs) => {
        const passesTest = cstmAttrs.eiIsFree100
            && cstmAttrs.eiIsTrial40k
            && cstmAttrs.eiIsPro
            && cstmAttrs.eiIsEssentials
            && cstmAttrs.mcIsPaid
            && cstmAttrs.isVerified
            && cstmAttrs.isAntiSpoofed;

        return passesTest;
    },
};

const otherAudience = {
    id: "audience_unverified_nonantispoof_new_ei_paid_mc",
    name: "non-verified non-anti-spoofed free100/trial40k/free100/essentials/pro ei plan and any paid MC plan",
    description: "homepage experiment audience",
    conditions: (cstmAttrs) => {
        const passesTest = cstmAttrs.eiIsFree100
            && cstmAttrs.eiIsTrial40k
            && cstmAttrs.eiIsPro
            && cstmAttrs.eiIsEssentials
            && cstmAttrs.mcIsPaid
            && !cstmAttrs.isVerified
            && !cstmAttrs.isAntiSpoofed;

        return passesTest;
    },
};

module.exports = {
    audience1,
    otherAudience,
}