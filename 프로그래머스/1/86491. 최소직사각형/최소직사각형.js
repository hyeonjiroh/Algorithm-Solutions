function solution(sizes) {
    // 각 명함의 긴 쪽을 가로(0번 인덱스)로 통일
    for (size of sizes) {
        if (size[0] < size[1]) {
            [size[0], size[1]] = [size[1], size[0]];
        }
    }
    
    // 모든 명함을 수납할 수 있는 최소 지갑 크기 반환
    let maxWidth = Math.max(...sizes.map(a => a[0]));
    let maxHeight = Math.max(...sizes.map(a => a[1]));
    
    return maxWidth * maxHeight;
}