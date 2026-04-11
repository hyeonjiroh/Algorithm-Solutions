function solution(s){   
    let p = s.toLowerCase().split("").filter((e) => e === "p");
    let y = s.toLowerCase().split("").filter((e) => e === "y");
    
    return p.length === y.length;
}