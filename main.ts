// question 45 
// car mode name print 


function storecarinfo(manufacturer: string, modelName: string, ...extraoption:{ [key: string]: any} []): object {


    const carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraoption)
    }
    return carInfo;
};

let answer = storecarinfo(`Honda`,`Civic`, {color: `black`}, {features: [`navigation`,`Power window`]})

console.log(answer);

