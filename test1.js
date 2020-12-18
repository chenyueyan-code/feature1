// This shows examples related with the Common Weakness Enumeration (CWE).

function CWE_129(x) { // ARRAY_INDEX_NEGATIVE
    var arr = [1, 2, 3];
    if (x < 0) {
        arr[x] = 3;
    }
}

function CWE_398() { // IDENTICAL_BRANCHES
    if (x >= 0) {
        y = x;
    } else {
        y = x;
    }
}

function CWE_476() { // NULL_POINTER
    var obj;
    var y = obj.x;
    console.log(y);
}

function CWE_480() { // BAD_BITWISE_OPERATOR
    var obj = null;
    if (obj & obj.prop) {
        console.log(obj.prop);
    }
}

function CWE_480_481() { // BAD_ASSIGN_IN_CONDITION
    var x = -1;
    if (x = -1) console.log('Error!', x);
}

function CWE_482_665() { // UNUSED_EXPR
    this.foo + 42;
}

function CWE_484() { // SWITCH_CASE_FALL_THROUGH
    var x;
    switch (x) {
    case '1': console.log('Do one thing');
    case '2': console.log('Do another thing');
    }
}

function CWE_489_569_570_571() { // CONSTANT_CONDITION
    var x = "Fo";
    var y = x + "Bar";
    if (y === "FooBar") {
        console.log('Do something');
    }
}

function CWE_561() { // UNREACHABLE_CODE
    return;

    var bar = 1;
    console.log(bar);
}
