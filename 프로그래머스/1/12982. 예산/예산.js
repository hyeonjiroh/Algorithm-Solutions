function solution(d, budget) {
    // 적은 금액부터 최대한 많은 부서를 지원하기 위해 오름차순 정렬
    const sorted = d.sort((a, b) => a - b);
    let total = 0;
    
    for (let i = 0; i < sorted.length; i++) {
        total += sorted[i];
        
        // 예산 초과 시 현재 인덱스가 지원 가능한 부서 수
        if (total > budget) {
            return i;
        }
    }
    
    // 예산 내에서 모든 부서 지원 가능
    return sorted.length;
}