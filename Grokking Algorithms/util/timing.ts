export function functionTimer<A extends unknown[], R>(
    func: (...args: A) => R,
    args: A,
    label: string = func.name || "Unknown Function",
    showResult: boolean = false,
    ): [label: string, time: number, result: R] {
    const start = performance.now();
    const result = func(...args);
    const end = performance.now();
    const time = end - start
    console.log(`${label} took ${time} ms.`);

    if (showResult) console.log(result);
    return [label, time, result];
}