import React from 'react';
import {
    CCard as Card,
    CCardBody as CardBody,
    CRow as Row,
    CCol as Col,
    CButton as Button
} from '@coreui/react'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { Chart, Line } from 'react-chartjs-2';

/**
 * Custom positioner
 * @function Chart.Tooltip.positioners.custom
 * @param elements {Chart.Element[]} the tooltip elements
 * @param eventPosition {Point} the position of the event in canvas coordinates
 * @returns {Point} the tooltip position
 */

/*
Chart.Tooltip.positioners.custom = function (elements, eventPosition) {
var tooltip = this;


return {
    x: 0,
    y: 0
};
};
*/

const mainChartOpts = {
    tooltips: {
        enabled: false,
        custom: CustomTooltips,
        intersect: false,
        mode: 'index',
        position: 'average',
        callbacks: {
            labelColor: function (tooltipItem, chart) {
                return { backgroundColor: '#FA4706' }
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
                unit: 'hour'
            },
            ticks: {
                source: 'auto',
                maxTicksLimit: 20,
                fontSize: 16,
                fontFamily: 'Poppins',
                fontColor: '#74787C',
            },
            gridLines: {
                display: false,
            }
        }],
        yAxes: [{
            ticks: {
                fontSize: 16,
                fontFamily: 'Poppins',
                fontColor: '#74787C',
            },
            gridLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)',
                borderDash: [13, 13],
                borderDashOffset: 13,
                lineWidth: 2,
                z: 2,
                drawBorder: false,
                zeroLineColor: 'rgba(0, 0, 0, 0.1)',
                zeroLineBorderDash: [13, 13],
                zeroLineBorderDashOffset: 13,
                zeroLineWidth: 2,
            }
        }]
    }
};

const FeedChart = ({ data = [] }) => {
    const mainChart = {
        datasets: [
            {
                label: '',
                borderColor: '#FA4706',
                backgroundColor: 'rgba(0, 0, 0, 0)',
                pointBorderColor: '#FA4706',
                pointBackgroundColor: '#FA4706',
                pointHoverBackgroundColor: '#FA4706',
                borderWidth: 4,
                data
            }
        ],
    };

    return (
        <div className='px-5 py-5' style={{
            width: '100%',
            height: 420,
            marginTop: 40,
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 18,
            backgroundColor: '#FFFFFF'
        }}>
            <div className="chart-wrapper" style={{
                width: '100%',
                height: '100%',
                overflow: 'visible'
            }} >
                <Line data={mainChart} options={mainChartOpts} />
            </div>
        </div>
    )
}

export default FeedChart;