/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
 var rotateString = function(A, B) {
    if(A===B) return true
    if(A.length > B.length || A.length === 0) return false
    const target = B+B
    return target.includes(A)
};