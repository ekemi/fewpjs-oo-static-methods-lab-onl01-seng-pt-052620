class Formatter {
  //add static methods here
  static capitalize(st){
    return st.charAt(0).toUpperCase()+st.slice(1,)
  }

  static sanitize(st){
    return st.replace(/[^A-Za-z0-9-'\s]/g,'')
  }

  static titleize(st){
    for ( let i =0; i<y;i++){
var p = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']

var x = "where the wild things are"
x = x.split(' ')

var y = x.lenth
var c =0
var temp = []


x = x.split(' ')

if (x[i]===p[i]){
    temp.push(x[i])
    console.log(temp)
}
else if( x[i]!==y[i]) {
temp.push(x[i][0].toUpperCase+x[i].slice(1,))
console.log(temp)
}
    
  }
}
