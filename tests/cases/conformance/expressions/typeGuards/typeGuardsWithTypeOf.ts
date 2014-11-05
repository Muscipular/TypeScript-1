// Type guards are particular expression patterns involving the ‘typeof’ and ‘instanceof’ operators 
// that cause the types of variables or parameters to be narrowed to more specific types.

function foo(x: number | string) {
    if (typeof x === "string") {
        // string
        return x.length;
    }
    else {
        // number
        return x++;
    }
}