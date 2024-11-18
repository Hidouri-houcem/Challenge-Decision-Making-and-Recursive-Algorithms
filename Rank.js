function lastPositiveElement (E , index = E.length - 1){



    if (index < 0){
        return `Aucun élément positif trouvé`;
    }


    if (E[index]>0){
        return `Le dernier élément positif a un rang ${index}`;
    }



    return lastPositiveElement (E , index - 1);
}


const E = [1, 28, -2, 5, 4, -9, 0, 8, -2, 0];
console.log(lastPositiveElement(E));


const A = [-1, -28, -2, -5, -4, -9, -0, -8, -2, 0];
console.log(lastPositiveElement(A));