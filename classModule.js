// Export Class Instance 
function greetr (){
    this.greeting="welcome from class greet";
    this.greet=function(){
        console.log(this.greeting);
    }
};

module.exports = new greetr();