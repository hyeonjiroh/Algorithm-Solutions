function solution(arr1, arr2) {
    return arr1.map((row, i) => row.map((n, j) => n + arr2[i][j]));
}