// https://www.hackerrank.com/challenges/three-month-preparation-kit-flipping-bits/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two
function flippingBits(n: number): number {
    // Write your code here
    const binary = n.toString(2);
    const to32Bits = new Array(32 - binary.length).fill(0).join("")+binary;
    const bitsFlipped = to32Bits.split("").map(bit => bit === "1" ? "0": "1").join("");
    return parseInt(bitsFlipped,2)
}
