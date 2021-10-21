var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    phrase: "taco Cat"
  } );
});


router.post('/', function(req,res){
  res.render('index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText) && getReverse(req.body.userText)


  })
})










function checkPalindrome(phrase){
  let temp = phrase.split("");

  temp = temp.reverse();
  temp = temp.join("");
  /temp = temp.removeAttribute()/

  if (phrase.toString().replace(`!.,:;'"`, "")&& phrase.toLowerCase().replace(" ","") === temp.toString().replace(`!.,:;'"`, "")&& temp.toLowerCase().replace(" ","") ){
    return true
  }
  else{
    return false
  }
}

function getResultDescription (phrase){
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome. `
  }
  return `${phrase} is not a palindrome `
}
function getReverse (temp){
  if (checkPalindrome(temp)){
    return `${temp}`
  }
  return `${temp}`
}
module.exports = router;
