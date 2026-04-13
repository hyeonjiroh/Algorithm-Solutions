function solution(arr, divisor) {
    let answer = [];
    
    for (n of arr) {
        if (n % divisor === 0) {
            answer.push(n);
        }
    }
    
    if (answer.length === 0) {
        answer.push(-1);
    }
    
    return answer.sort((a, b) => a - b);
}