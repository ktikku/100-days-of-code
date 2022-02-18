/*
 * Complete the 'minNum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER samDaily
 *  2. INTEGER kellyDaily
 *  3. INTEGER difference
 */

function minNum(samDaily, kellyDaily, difference) {
    // Write your code here
    if (samDaily >= kellyDaily) {
        return -1;
    }
    let sumSam = difference;
    let sumKelly = 0;
    let i = 0;
    do {
        sumSam += samDaily;
        sumKelly += kellyDaily
        i++;
    } while (sumSam >= sumKelly);
    return i;
}