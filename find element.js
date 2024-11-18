function findElement(A, a, b, index = 0) {


    if (index >= A.length) {
        return `Aucun élément trouvé`;
    }


    

    if (A[index] >= a && A[index] <= b) {
        return `L'élément trouvé est A[${index}] = ${A[index]}`;
    }

    return findElement(A, a, b, index + 1);
}

const A = [3, 7, 8, 63, 556];
const a = 40, b = 50;

console.log(findElement(A, a, b));

const B = [3, 7, 8, 43, 556];
const e = 40, d = 50;


console.log(findElement(B, e, d));
