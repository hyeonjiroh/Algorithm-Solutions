function solution(x) {
    let sum = String(x)
                .split("")
                .reduce((sum, num) => sum + Number(num), 0);
    
    return x % sum === 0;
}