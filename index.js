
 
const express = require('express');

/* Below line makes sure that mongoose runs atleast once
 * and we connect to database.
*/
require('./database/mongoose');

const handleTranslation = require('./translation/handleTranslation');
const TranslationSchema = require('./database/translations');

const { response, request } = require('express');
const { replaceOne } = require('./database/translations');

const app = express();
const port = process.env.PORT || 3000;

/* It will automatically parse incoming json(via post method) to an object
 * so we can access it in our request handlers.
*/
app.use(express.json());


app.get('/', (request, reponse)=>{
    response.send('Translation API is working');
})


app.get('/translate', (request, response)=>{

    const message = request.body.msg;
    const toLanguage = request.body.lang;

    if(!(message && toLanguage)){
        return response.status(400).send({
            error: 'Please enter both "msg" and "lang" for translation'});
    }

    TranslationSchema.find({message: message, toLanguage: toLanguage}).then((result)=>{

        if(result.length === 0){
            handleTranslation(message, toLanguage, (err, result)=>{
                if(err){
                    return response.status(500).send('Something went wrong.');
                }
                const obj = {
                    message:message,
                    toLanguage: toLanguage,
                    translatedMessage: result
                }
                const newTranslation = new TranslationSchema(obj);
                newTranslation.save().then((result)=>{
                    response.send('Translation API was called.' + result);
                }).catch((error)=>{
                    response.status(400).send(error);
                });
            })
        }
        else{
            response.send('Tranlation API was not called and result was directly taken from database.\n' + result);
        }


    }).catch((error)=>{
        response.status(500).send(error);
    });

})



app.listen(port, ()=>{
    console.log('Translation API is working.');
});


