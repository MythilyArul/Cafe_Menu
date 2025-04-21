const handleClickJoke = async()=>{
    try{
        const joke = await fetch('https://api.chucknorris.io/jokes/random',{
            headers:{Accept: 'application/json',} 
        })
        const generateJoke =await joke.json();
        console.log(generateJoke);
        document.getElementById("joke").innerHTML= generateJoke.value;
    }
    catch(error){
        console.log(error)
    }
   
}
document.getElementById('lodingJoke').addEventListener('click',handleClickJoke);