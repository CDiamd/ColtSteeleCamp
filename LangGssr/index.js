const franc = require('franc');
const langs = require('langs');
const colors = require("colors");

const user_input = process.argv[2];

language_code = franc(user_input);
lang_json = langs.where("3", language_code);

if (lang_json === undefined){
    console.log("Sorry cannot determine language!".red)
}
else{
    console.log(`I think this is: ${lang_json.name}`);
}