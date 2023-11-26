export interface LineData {
    label: string;
    value: number;
}

export interface ScatterData {
    label: string;
    xValue: number;
    yValue: number;
}

export interface ChartData {
    yrange: number,
    lineData: LineData[]
}

export interface ScatterChartData {
    lineData: ScatterData[];
}

export interface AttributeData {
    id: number;
    date: string;
    continent: string;
    location: string;
    yrange: number;
    lineData: LineData[];
}
