// Type guards are particular expression patterns involving the ‘typeof’ and ‘instanceof’ operators 
// that cause the types of variables or parameters to be narrowed to more specific types.

function foo(x: number | string) {
    // In the true branch statement of an ‘if’ statement, 
    // the type of a variable or parameter is narrowed by any type guard in the ‘if’ condition when true, 
    // provided the true branch statement contains no assignments to the variable or parameter.
    if (typeof x === "string") {
        return x.length; // string
    }
    else {
        // In the false branch statement of an ‘if’ statement, 
        // the type of a variable or parameter is narrowed by any type guard in the ‘if’ condition when false, 
        // provided the false branch statement contains no assignments to the variable or parameter
        return x++; // number
    }
}
function foo2(x: number | string) {
    if (typeof x === "string") {
        // x is used in the if true branch, the type is not narrowed
        x = 10;
        return x; // string | number
    }
    else {
        return x++; // number
    }
}
function foo3(x: number | string) {
    if (typeof x === "string") {
        // x is used in the if true branch, the type is not narrowed
        x = "Hello"; // even though assigned using same type as narrowed expression
        return x; // string | number
    }
    else {
        return x++; // number
    }
}
function foo4(x: number | string) {
    if (typeof x === "string") {
        return x.length; // string
    }
    else {
        // false branch updates the variable - so here it is not number
        x = 10; // even though assigned number - this should result in x to be string | number
        return x; // string | number
    }
}
function foo5(x: number | string) {
    if (typeof x === "string") {
        return x.length; // string
    }
    else {
        // false branch updates the variable - so here it is not number
        x = "hello";
        return x; // string | number
    }
}
function foo6(x: number | string) {
    // Modify in both branches
    if (typeof x === "string") {
        x = 10;
        return x; // string | number
    }
    else {
        x = "hello";
        return x; // string | number
    }
}
function foo7(x: number | string | boolean) {
    if (typeof x === "string") {
        return x === "hello"; // string
    }
    else if (typeof x === "boolean") {
        return x; // boolean
    }
    else {
        return x == 10; // number
    }
}
function foo8(x: number | string | boolean) {
    if (typeof x === "string") {
        return x === "hello"; // string
    }
    else {
        var b: number | boolean = x; //  number | boolean
        if (typeof x === "boolean") {
            return x; // boolean
        }
        else {
            return x == 10; // number
        }
    }
}