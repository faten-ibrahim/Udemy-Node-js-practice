// exports=function(){
//     console.log("HIIIIIIIIIIIIIIIIIII export");
// };   /*==  here exports & module.exports do not refere to the same object ==*/

exports.greet=function(){
    console.log("HIIIIIIIIIIIIIIIIIII export");
};  /*== here exports & module.exports refere to the same object ==*/

console.log(exports);
console.log(module.exports);