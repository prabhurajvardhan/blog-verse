const sampleData = async()=>{
    try{
        let resource = await fetch("https://www.google.com");
        console.log(resource)
    }
    catch(err){
        console.log("Error accesing google: "+err)
    }


}
sampleData()