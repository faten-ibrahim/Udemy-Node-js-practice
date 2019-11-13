// Export Class 
function tGreet (){
    this.greeting="welcome from class greet Sparate instance";
    this.greet=function(){
        console.log(this.greeting);
    }
};

module.exports = tGreet;