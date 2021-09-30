Translation API!  
  
Working:  
 -> Takes a JSON object with properties msg and lang.                        
 -> Automatically detects given language and translates it to given language.  
 -> To translate : (In Postman)                                    
    localhost:3000/translate                                              
    url's body format :                                                    {  
    "msg": "kya",  
    "lang": "en"  
    }                                                                             
  
 Description:  
  I Couldn't use google's api as Google needs time to validate billing information of a account. So, To work around that I used a python script which uses googletrans====3.1.0a0 module and used that python script in my nodejs project using child_process feature of nodejs.  
  
Design:  
 API takes input from url's body. Before translation, database is searched and if translation is present(as cached info) then user is given translated message directly. And if database doesn't contain translation then translation is performed using googletrans and also stored in our database to use in future translations.  
 However, googletrans doesn't need to load any languages as it directly takes message and translate it to required language. So I think second problem of requesting language from API is not valid in this case.  
  
Tools used:  
 nodejs, MongoDB, python(googletrans)  
  
 API execution:   
 -> clone project from github.  
 -> Run following commands in terminal of cloned folder.  
 -> use `npm install`  
 -> use `pip install googletrans====3.1.0a0`  
 -> run `node index.js`                                                                                                             
 -> url: `localhost:3000/translate` (json object must be inside body )  
  
-> Make sure that mongodb is installed in system.  

JSON object:
-> To translate a message, we are providing this object via url's body.                                                          
-> In lang property of this object, we use language codes as mentioned in googletrans.                                                 
-> Link to language codes: `https://cloud.google.com/translate/docs/languages`