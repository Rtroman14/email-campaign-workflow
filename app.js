const { emailCampaignWorkflow } = require("./index");

(async () => {
    try {
        await emailCampaignWorkflow();
    } catch (error) {
        console.log(error);
    }
})();
