function addSquares(a, b){
    const a = square(a);
    const b = square(b);

    function square(num){
        return num*num;
    }

    return a + b;
}
console.log(addSquares(3, 4));