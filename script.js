var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v2/all',true);
request.send();
request.onload = function(){
    var data = JSON.parse(request.response);
    console.log(data);
    function isEqual(a,b){
        var keys1=Object.keys(a);
        var keys2=Object.keys(b);
        if(keys1.length!==keys2.length){
            return false;
        }
        for(let i of keys1){
            if(a)
        }
    }
}