function solution(left, right) {
    let sum = 0;
    
    for (let i = left; i < right + 1; i++) {
        // 완전제곱수의 경우 약수의 개수가 홀수
        sum += Number.isInteger(Math.sqrt(i)) ? -i : i;
    }
    
    return sum;
}