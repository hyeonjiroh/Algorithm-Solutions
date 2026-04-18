function solution(n, m) {   
    // 최대공약수: 유클리드 호제법으로 구하기
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    
    // 최소공배수: 두 수를 곱한 값을 최대공약수로 나눠서 구하기
    const lcm = (a, b) => (a * b) / gcd(a, b);
    
    return [gcd(n, m), lcm(n, m)];
}