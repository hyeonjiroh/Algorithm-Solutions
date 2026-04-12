function solution(numbers) {
    let total = 45; // 0~9 합

    return total - numbers.reduce((sum, n) => sum + n, 0);
}