let keys =[
  [{"key":"a","tune":"tunes/a.wav","color":"white"},
    {"key":"w","tune":"tunes/w.wav","color":"black"}],

  [{"key":"s","tune":"tunes/s.wav","color":"white"},
    {"key":"e","tune":"tunes/e.wav","color":"black"}],

  [{"key":"d","tune":"tunes/d.wav","color":"white"}],

  [{"key":"f","tune":"tunes/f.wav","color":"white"}, {"key":"t","tune":"tunes/t.wav","color":"black"}],
    

  [{"key":"g","tune":"tunes/g.wav","color":"white"}, {"key":"y","tune":"tunes/y.wav","color":"black"}],
  [{"key":"h","tune":"tunes/h.wav","color":"white"}, {"key":"u","tune":"tunes/u.wav","color":"black"}],
  [{"key":"j","tune":"tunes/j.wav","color":"white"}],
  [{"key":"k","tune":"tunes/k.wav","color":"white"}, {"key":"o","tune":"tunes/o.wav","color":"black"}],
  [{"key":"l","tune":"tunes/l.wav","color":"white"}, {"key":"p","tune":"tunes/p.wav","color":"black"}],
  [{"key":";","tune":"tunes/;.wav","color":"white"}]]


function getKeyOutput(e){
  let keyAlpha = e.key;
  let obj = [{
    "key": keyAlpha,
    "tune": `tunes/${keyAlpha}.wav`,
    "color": "black"
  }];
  keys.push(obj);
  console.log(JSON.stringify(keys));
  
}

// window.addEventListener('keydown', getKeyOutput);

