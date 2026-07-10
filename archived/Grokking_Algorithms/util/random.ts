export function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function randomArray(
    size: number,
    min: number,
    max: number
): number[] {
    return Array.from({ length: size }, () => randomInt(min, max));
}



