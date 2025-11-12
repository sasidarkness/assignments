function a(num){
    if( num < 0){
        throw new Error("it is nagativ num");
        
    }else{console.log("it is pasitive num", num);
    }
}
try{
    a(6)
}catch(error){
console.error("error",error.message);

}


