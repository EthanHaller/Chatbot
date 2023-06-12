var express = require('express');
var router = express.Router();
const openai = require('./openai')

const allMessages = []

router.post("/converse", async (req, res, next) => {
    allMessages.push({"role": "user", "content": req.body.message})
    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: allMessages
    })
    allMessages.push(completion.data.choices[0].message)
    res.json({"result": completion.data.choices[0].message})
})

module.exports = router