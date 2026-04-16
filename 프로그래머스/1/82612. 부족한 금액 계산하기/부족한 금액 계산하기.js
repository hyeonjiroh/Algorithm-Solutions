function solution(price, money, count) {
    // 등차수열 합 공식
    let total = price * count * (count + 1) / 2
    return Math.max(0, total - money);
}