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

