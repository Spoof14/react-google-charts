import * as React from "react";
import { ReactGoogleChartState, GoogleViz, ReactLoaderProps } from "./types";
export declare class Loader extends React.Component<ReactLoaderProps, ReactGoogleChartState> {
    state: {
        loadingStatus: "loading" | "errored" | "ready";
        google: GoogleViz | null;
    };
    _isMounted: boolean;
    static defaultProps: {
        graph_id: string | null;
        legend_toggle: boolean;
        graphID: string | null;
        options: Partial<{
            [otherOptionKey: string]: any;
            width: number;
            height: number;
            is3D: boolean;
            title: string;
            backgroundColor: string;
            hAxis?: {
                [otherOptionKey: string]: any;
                minValue?: any;
                maxValue?: any;
                ticks?: (number | Date)[] | undefined;
                title?: string | undefined;
                viewWindow?: {
                    max?: any;
                    min?: any;
                } | undefined;
            } | undefined;
            vAxis?: {
                [otherOptionKey: string]: any;
                minValue?: any;
                maxValue?: any;
                ticks?: (number | Date)[] | undefined;
                title?: string | undefined;
                viewWindow?: {
                    max?: any;
                    min?: any;
                } | undefined;
            } | undefined;
            legend: any;
            colors: string[];
        }>;
        data: null;
        rows: import("./types").GoogleDataTableCell[][] | null;
        columns: import("./types").GoogleDataTableColumn[] | null;
        diffdata: {
            old: any;
            new: any;
        } | null;
        chartEvents: import("./types").ReactGoogleChartEvent[] | null;
        legendToggle: boolean;
        chartActions: import("./types").GoogleChartAction[] | null;
        getChartWrapper: (chartWrapper: import("./types").GoogleChartWrapper, google: GoogleViz) => void;
        getChartEditor: ((args: {
            chartEditor: import("./types").GoogleChartEditor;
            chartWrapper: import("./types").GoogleChartWrapper;
            google: GoogleViz;
        }) => void) | null;
        className: string;
        style: {};
        formatters: null;
        spreadSheetUrl: null;
        spreadSheetQueryParameters: {
            headers: number;
            gid: number;
        };
        rootProps: {};
        chartWrapperParams: {};
        controls: import("./types").GoogleChartControlProp[] | null;
        render: import("./types").ReactGoogleChartDashboardRender | null;
        toolbarItems: null;
        toolbarID: null;
    };
    render(): JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
    onLoad: (google: GoogleViz) => void;
    onSuccess: (google: GoogleViz) => void;
    onError: () => void;
    isFullyLoaded(google: GoogleViz): true | import("./types").GoogleVizDrawToolbar;
}
