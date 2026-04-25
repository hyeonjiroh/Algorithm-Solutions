function solution(s) {
    let answer = [];
    
    for (let i = 0; i < s.length; i++) {
        // 현재 위치 이전 문자열
        let prev = s.slice(0, i);
        
        // 이전 문자열에서 같은 글자의 마지막 인덱스
        let lastIndex = prev.lastIndexOf(s[i]);
        
        // 같은 글자가 없으면 -1, 있으면 거리 계산
        answer.push(lastIndex === -1 ? -1 : i - lastIndex);
    }
    
    return answer;
}