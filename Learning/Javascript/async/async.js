const preHeatOven=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const preHeatOven=true;
            if(preHeatOven){
                resolve("Preheat oven at 180deg")
            }
            else{
                reject("Failed to heat")
            }
        }, 1000);
    })
}

const addSugarAndChocoChips=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const addSugarAndChocoChips=true;
            if(addSugarAndChocoChips){
                resolve("Melt the butter, sugars, chocolate, and golden syrup in a pan over low heat until smooth.")
            }
            else{
                reject("Failed to add the ingredients")
            }
        }, 500);
    })
}

const addFlourCocoAndSalt=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const addFlourCocoAndSalt=true;
            if(addFlourCocoAndSalt){
                resolve("Sift in the flour, baking powder, and cocoa powder, and mix thoroughly.")
            }
            else{
                reject("Failed to add the flour ingredients")
            }
        }, 1000);
    })
}

const bakeMixutre=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const bakeMixutre=false;
            if(bakeMixutre){
                resolve("Pour the batter into the prepared tin and bake for 25-30 minutes.")
            }
            else{
                reject("Failed to bake")
            }
        }, 1000);
    })
}

const bakebrowines = async () =>{
    try {
        const task1 = await preHeatOven();
        console.log(task1);
        const task2 = await addSugarAndChocoChips();
        console.log(task2);
        const task3 = await addFlourCocoAndSalt();
        console.log(task3);
        const task4 = await bakeMixutre();
        console.log(task4);
        console.log("Enjoy your browines")
    } catch (error) {
        console.log(error)
    }
   
}

bakebrowines();