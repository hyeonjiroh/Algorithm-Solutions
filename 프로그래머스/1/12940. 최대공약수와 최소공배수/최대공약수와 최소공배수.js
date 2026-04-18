// 최대공약수: 유클리드 호제법으로 구하기
function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

// 최소공배수: 두 수를 곱한 값을 최대공약수로 나눠서 구하기
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(n, m) {
    let a = Math.max(n, m);
    let b = Math.min(n, m);
    
    return [gcd(a, b), lcm(a, b)];
}