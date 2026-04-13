function solution(phone_number) {
    let numLen = phone_number.length;   
    return "*".repeat(numLen - 4) + phone_number.slice(numLen - 4, numLen);
}