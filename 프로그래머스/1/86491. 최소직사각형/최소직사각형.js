function solution(sizes) {
    // 각 명함의 긴 쪽을 가로(0번 인덱스)로 통일
    const normalized = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    
    // 모든 명함을 수납할 수 있는 최소 지갑 크기 반환
    let maxW = Math.max(...normalized.map(s => s[0]));
    let maxH = Math.max(...normalized.map(s => s[1]));
    
    return maxW * maxH;
}