function solution(n) {
    let answer = [];
    let i = 0;
    
    while (n > 0) {
        answer[i] = n % 10;
        n = Math.floor(n / 10);
        i++;
    }
    
    return answer;
}