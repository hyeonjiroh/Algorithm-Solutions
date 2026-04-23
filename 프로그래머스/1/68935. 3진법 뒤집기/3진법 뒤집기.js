function solution(n) {
    // n을 3진법으로 변환 후 앞뒤 반전
    const ternary = n.toString(3).split("").reverse().join("");
    
    // 다시 10진법으로 변환
    return parseInt(ternary, 3);
}