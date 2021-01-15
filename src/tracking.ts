interface IDataLayerWindow extends Window {
    dataLayer: IDictionary<any>[];
}

const pushData = (data:IDictionary<any>): void => {
    const dataLayerWindow: IDataLayerWindow = (window as any);
    if(!dataLayerWindow.dataLayer) return;
    dataLayerWindow.dataLayer.push(data);
};

const trackPerformanceMeasure = (measureName: string, start: string, end: string): void => {
    const startMarks = performance.getEntriesByName(start);
    const endMarks = performance.getEntriesByName(end);

    if(!startMarks.length || !endMarks.length) {
        return;
    }

    performance.measure(measureName, start, end);
    const measures = performance.getEntriesByName(measureName);
    if(measures.length > 0) {
        pushData({
            event: 'GAevent',
            eventAction: 'track',
            eventCategory: 'timer',
            eventLabel: measureName,

            eventValue: measures[measures.length - 1].duration,
        });
    }
};

export default {
    pushData,
    trackPerformanceMeasure,
};
