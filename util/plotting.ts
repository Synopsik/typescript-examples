import {Layout, plot, Plot} from 'nodeplotlib';

type PlotType = NonNullable<Plot['type']>;

export function plotData(
    x: number[],
    y: number[],
    type: PlotType = 'scatter',
    layout: Layout = {},
) {
    const data: Plot[] = [{
        x: x,
        y: y,
        type: type,
    }];
    plot(data, layout);
}


export function averageCase<A extends unknown[], R>(
    func: (...args: A) => R,
    createArgs: (size: number) => A,
    loops: number = 1_000_000,
) {
    const inputSizes: number[] = [];
    const averageTimes: number[] = [];
    const averagingLoops: number = 100;
    let xNumber: number = 0;

    for (let arraySize = 100; arraySize <= loops; arraySize *= 10) {
        const args = createArgs(arraySize);

        const start = performance.now();
        for (let i = 0; i < averagingLoops; i++) {
            func(...args);
        }
        const totalTime = performance.now() - start;

        inputSizes.push(xNumber += 1);
        averageTimes.push(totalTime / averagingLoops);
    }

    plotData(inputSizes, averageTimes);
}