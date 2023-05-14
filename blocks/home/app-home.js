module.exports = (name)=>{
    return {
        "type": "home",
        "blocks": [
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": `Hi ${name},\nHow can I help you?\nThese are the processes I can help you with today :smile:`
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "actions",
                "elements":  [
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "What's on my plate",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "get_plate_data"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "MIR Pre Meeting",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "get_mir_meeting_prep"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Sales Pre Meeting",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "get_sales_meeting_prep"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "Sales Post Meeting",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "get_sales_post_meeting"
                    },
                    {
                        "type": "button",
                        "text": {
                            "type": "plain_text",
                            "text": "SimilarPro",
                            "emoji": true
                        },
                        "value": "click_me_123",
                        "action_id": "similar_pro_meeting"
                    }
                ]
            }
        ]
    }
}

