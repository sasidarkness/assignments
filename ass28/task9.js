let nums = [5, 2, 9, 1, 8];
console.log("Original:", nums);

nums.sort((a, b) => {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
});
console.log("Sorted Asc:", nums);

nums.sort((a, b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    else return 0;
});
console.log("Sorted Desc:", nums);
