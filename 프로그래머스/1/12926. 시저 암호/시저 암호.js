function solution(s, n) {
    return [...s].map(c => {
        if (c === ' ') return ' ';
        
        const base = c >= 'a' ? 97 : 65;
        return String.fromCharCode((c.charCodeAt() - base + n) % 26 + base);
    }).join('');
}