var b = 1;
// bad
function count(a = b++) {
    console.log(a);
}
count(); // 1
count(); // 2
count(3); // 3
count(); // 3
