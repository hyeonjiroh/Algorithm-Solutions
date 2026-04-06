function solution(n) {
    let sum = 0;
    
    // 약수는 항상 쌍으로 존재하기 때문에 √n까지만 순회
    for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            sum += i;
            
            // 약수 i와 한 쌍인 약수(n/i)도 합에 누적
            // 제곱수의 경우 중복되지 않도록 스킵
            if (i !== n / i) {
                sum += n / i;
            }
        }
    }
    
    return sum;
}