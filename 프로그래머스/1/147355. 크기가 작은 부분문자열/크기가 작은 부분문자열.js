function solution(t, p) {
    // 문자열 t에서 p와 길이가 같은 부분 문자열
    const substrings = [];
    
    for (let i = 0; i <= t.length - p.length; i++) {
        substrings.push(t.slice(i, i + p.length));
    }
    
    // 문자열 t의 부분 문자열 중 p보다 작거나 같은 경우 카운트
    let count = 0;
    
    for (let sub of substrings) {
        if (Number(sub) <= Number(p)) {
            count++;
        }
    }
    
    return count;
}