const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const { OpenAIApi } = require("openai");

const openai = new OpenAIApi();

app.post('https://api.openai.com/v1/completions', async (req, res) => {
    try {
        const request_options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer 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`
            },
            body: {
                model: req.body.model,
                prompt: req.body.prompt,
                max_tokens: 7,
                temperature: 0
            }
        }

        openai.createCompletion(request_options)
            .then((response) => {
                res.send({ response });
            })
            .catch(err => {
                console.log(err.message);
            })
    } catch (error) {
        console.log(error);
    }
});

app.listen(3000, function() {
    console.log('Server is listening on port 3000');
});


// curl -X POST https://api.openai.com/v1/engines/text-davinci/jobs \
// -H "Content-Type: application/json" \
// -H "Authorization: Bearer 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" \
// -d '{"prompt":"What is the capital of France?"}'