export default function bs_list(haystack: number[], needle: number): boolean {
    let left = 0;
    let right = haystack.length - 1;
    let mid;

    while (left <= right) {
        mid = Math.floor((left + right) / 2);

        if (haystack[mid] === needle) return true;
        if (haystack[mid] < needle) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}
