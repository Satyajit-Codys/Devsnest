class  Test{
    print(){
        console.log("Inside the require_test");
    }
}

//for internal use only
class Test2{
    print(){
        console.log("kuch bhi >>>");
    }
}

//exports only Test Class
module.exports = Test;
