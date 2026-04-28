function solution(food) {
    // 각 음식을 반으로 나눠 칼로리 낮은 순서대로 배치 (0번 인덱스 물 제외)
    const half = food.slice(1).flatMap((f, i) => 
        new Array(Math.floor(f / 2)).fill(String(i + 1))
    );
    
    return [...half, "0", ...half.reverse()].join("");
}