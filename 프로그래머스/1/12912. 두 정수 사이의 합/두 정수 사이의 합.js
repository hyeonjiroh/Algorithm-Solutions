function solution(a, b) {
    var answer = 0;
    
    var start = Math.min(a, b);
    var end = Math.max(a, b);
    
    // 등차수열의 합 공식
    answer = (end - start + 1) * (start + end) / 2;
    
    return answer;
}