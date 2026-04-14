function solution(arr) {
    let min = Math.min(...arr);
    let answer = arr.filter(n => n !== min);
    
    return answer.length === 0 ? [-1] : answer;
}