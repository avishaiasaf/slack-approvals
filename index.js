const { App, LogLevel, subtype } = require('@slack/bolt');
const axios = require('axios');
const ENV = require('./env.js');
const homeTab = require('./blocks/home/app-home.js');
const { WebClient } = require('@slack/web-api');
const slackClient = new WebClient(ENV.TOKEN);
const workatoEndpoints = require('./workato-endpoints.js');
const utils = require('./utils/utils.js');
const auth = require('./utils/auth.js');


let logLevel;
logLevel = LogLevel.DEBUG;

const app = new App({
    token: ENV.TOKEN,
    signingSecret: ENV.SIGNING_SECRET,
    logLevel
});

(async () => {
    await app.start(process.env.PORT || 3000);
    console.log('⚡️ Bolt app is running!');
  })();
  
// ------------------------------- App Methods ------------------------------- //

const postAppMessage = utils.postAppMessage.bind(app);

// ------------------------------- App Actions ------------------------------- //

/**
 * Triggered on the "Prepare for Sales Meeting" button on the app Hello Message
 */
app.action('get_plate_data', async ({ ack, payload, body }) => {
    console.log('get_plate_data  clicked', payload, body);
    ack();
    const response = await utils.OauthRequest('customscript_sw_rl_export_saved_search', 'customdeploy_sw_rl_export_saved_search', auth, {'action':'SLACK_OPTIONS'})

    const channelId = body.container.channel_id;
    console.log('cannnel id', channelId);
    await postAppMessage({
        channel: body.container.channel_id, 
        text: `This is the summary you need on customer X `,
    });
});


// ------------------------------- App Events ------------------------------- //

/**
 * Open App Home
 */
app.event('app_home_opened', async ({ event, client, logger }) => {
    
  console.log('home on app');
  try {
    const userData = await client.users.info({
      user: event.user
    });
    const userEmail = userData.user.email;
    const userName = userData.user.real_name;
    console.log('userEmail', userName);
    // const userLeads = await getUserLeads(userEmail);
    // console.log(userLeads.leads);

    // Call views.publish with the built-in client
    const result = await client.views.publish({
      user_id: event.user,
    //   view: homeTab("Welcome to MIS Slack App.\n Pleaese select your prefered action")
        view: homeTab(userName)
    });
    logger.info(result);
  }
  catch (error) {
    logger.error(error);
  }
});

// ------------------------------- App Messages ------------------------------- //



// ------------------------------- App Views ------------------------------- //
