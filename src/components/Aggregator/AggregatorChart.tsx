/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { memo } from 'react';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

//Drizzle
import { Chart, Line } from 'react-chartjs-2';
import { withRenderCount } from 'react-render-counter';

const brandInfo = getStyle('--info')

/**
 * Custom positioner
 * @function Chart.Tooltip.positioners.custom
 * @param elements {Chart.Element[]} the tooltip elements
 * @param eventPosition {Point} the position of the event in canvas coordinates
 * @returns {Point} the tooltip position
 */
Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
    /** @type {Chart.Tooltip} */
    var tooltip = this;

    /* ... */

    return {
        x: 0,
        y: 0
    };
};

const mainChartOpts = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: false,
        mode: 'index',
        position: 'custom',
        callbacks: {
            labelColor: function (tooltipItem, chart) {
                return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor }
            }
        }
    },
    maintainAspectRatio: false,
    legend: {
        display: false,
    },
    elements: {
        point: {
            radius: 3,
            hitRadius: 20,
            hoverRadius: 5,
            hoverBorderWidth: 3,
        },
    },
    scales: {
        xAxes: [{
            type: 'time',
            distribution: 'linear',
            bounds: 'data',
            time: {
                displayFormats: {
                    minute: 'h:mm a'
                }
            },
            ticks: {
                source: 'auto',
                maxTicksLimit: 20
            }
        }]
    }
};

const AggregatorChart = ({
    data = [], historyRange = 0,
    count,
    answerTransform = (v) => v }) => {
    console.debug(`[RENDER] AggregatorChart ${count}`)

    if (data.length < historyRange) {
        return (<div>Loading... {data.length}/{historyRange}</div>)
    }


    const mainChart = {
        datasets: [
            {
                label: 'data',
                backgroundColor: hexToRgba(brandInfo, 10),
                borderColor: brandInfo,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data.map((d) => {
                    return {
                        'x': d.x,
                        'y': answerTransform(d.y)
                    }
                }),
            }
        ],
    };

    return (
        <div>
            <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                <Line data={mainChart} options={mainChartOpts} height={300} />
            </div>
        </div>
    )
}

export default memo(withRenderCount(AggregatorChart));