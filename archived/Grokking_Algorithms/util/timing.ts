export function functionTimer<A extends unknown[], R>(
    func: (...args: A) => R,
    args: A,
    label: string = func.name || "Unknown Function",
    showResult: boolean = false,
    ): [label: string, time: number, result: R] {
    // Compares the timing of a function call
    const start = performance.now();
    const result = func(...args);
    const time = performance.now() - start;
    // Logging for user review
    console.log(`${label} took ${time} ms.`);
    if (showResult) console.log(result);
    // Returns a tuple
    return [label, time, result];
}
