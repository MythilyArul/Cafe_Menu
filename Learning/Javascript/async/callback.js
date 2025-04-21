// Synchronous ()
// console.log("Step 1: Preheat your oven to 180°C (fan 160°C/gas 4). Grease and line a 20cm cake tin.");
// console.log("Step 2: Melt the butter, sugars, chocolate, and golden syrup in a pan over low heat until smooth.");
// console.log("Step 3: Remove from heat and let it cool slightly.");
// console.log("Step 4: Whisk the eggs until frothy, then mix them into the chocolate mixture along with vanilla essence.");
// console.log("Step 5: Sift in the flour, baking powder, and cocoa powder, and mix thoroughly.");
// console.log("Step 6: Pour the batter into the prepared tin and bake for 25-30 minutes.");
// console.log("Step 7: Let it cool for 20-30 minutes before slicing. Serve with cream, ice cream, or fresh fruit.");

// asynchronous ()
// here we are calling the another function using callback function. So that it will excute first.
function task1(callback){
    setTimeout(()=>{
        console.log(" 1: Preheat your oven to 180°C (fan 160°C/gas 4). Grease and line a 20cm cake tin.");
        callback();
    },1000)
}

function task2(callback){
    setTimeout(()=>{
        console.log(" 2: Melt the butter, sugars, chocolate, and golden syrup in a pan over low heat until smooth.");
        callback();
    },2000)
}

function task3(callback){
    setTimeout(()=>{
        console.log("3. Remove from heat and let it cool slightly.");
        callback();
    },3000)
}

function task4(callback){
    setTimeout(()=>{
        console.log("4. Whisk the eggs until frothy, then mix them into the chocolate mixture along with vanilla essence.");
        callback();
    },1000)
}
function task5(callback){
    setTimeout(()=>{
        console.log("5. Whisk the eggs until frothy, then mix them into the chocolate mixture along with vanilla essence.");
        callback();
    },500)
}
function task6(callback){
    setTimeout(()=>{
        console.log("6.Sift in the flour, baking powder, and cocoa powder, and mix thoroughly.");
        callback();
    },200)
}
function task7(callback){
    setTimeout(()=>{
        console.log("7: Pour the batter into the prepared tin and bake for 25-30 minutes.");
        callback();
    },100)
}
function task8(callback){
    setTimeout(()=>{
        console.log("8: Let it cool for 20-30 minutes before slicing. Serve with cream, ice cream, or fresh fruit.");
        callback();
    },800)
}
// callback the funtion inside the function is called callback hell
task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6(()=>{
                        task7(()=>{
                            task8(()=>{

                            })
                        })
                    })
                })
            })
        })
    })
})
