function between(x, min, max) {
  return x >= min && x <= max
}
function printableChar(chr) {
  const code = chr.toLowerCase().charCodeAt(0);
  if (between(code, 48, 57) ||
    code == 37 ||
    code == 126 ||
    between(code, 33, 35) ||
    between(code, 42, 43) ||
    between(code, 45, 46) ||
    between(code, 58, 64))
  { //numbers and symbols
    return {animation:animations["nums"].animations,letter:String.fromCharCode(code),y:3};
  }
  else if(between(code, 97, 122))
  { // letters
    return {animation:animations["caps"].animations,letter:String.fromCharCode(code),y:3};
  }
  else if (code == 36 ||
    code == 47 ||
    between(code, 39, 41) ||
    between(code, 91, 93) ||
    between(code, 123, 125))
  { // symbols
    return {animation:animations["syms"].animations,letter:String.fromCharCode(code),y:0};
  } else {
    return {animation:animations["caps"].animations,letter:'space',y:0};
  }
};
function writeText(words,location){
  var text = [];
  if(!words){return text}
  words = words.toString();
  for (var i = 0; i < words.length; i++) {
      var letter = words.charAt(i);
      //var letter;
      letter = printableChar(letter);
      //play the animation then push to the array
      let newAnim = kontra.sprite({
        animations:letter.animation,
        x:location.x+(i*fontsize),
        y:location.y+letter.y})
        newAnim.playAnimation(letter.letter)
      text.push(newAnim);
  }
  return text;
}