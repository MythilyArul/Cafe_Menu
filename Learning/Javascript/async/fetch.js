const getAllProducts = async ()=>{
    try {
        const response = await fetch('https://dummyjson.com/products',{});
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
    
    
}
getAllProducts();



// fetch('https://dummyjson.com/products/1',{
//     method: 'delete',
   
  
// })
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

