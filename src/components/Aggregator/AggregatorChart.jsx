/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { useState, useContext, useEffect, memo } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    ListGroup,
    ListGroupItem,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Col,
    Row
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'

//Drizzle
import { newContextComponents } from "@drizzle/react-components"
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import { Chart, Bar, Line } from 'react-chartjs-2';
import moment from "moment"
import { merge } from 'lodash';


const brandPrimary = getStyle('--primary')
const brandSuccess = getStyle('--success')
const brandInfo = getStyle('--info')
const brandWarning = getStyle('--warning')
const brandDanger = getStyle('--danger')

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

const AggregatorChart = ({ data, title }) => {
    //const labels = [new Date(), moment(1585052820 * 1e3)]

    const mainChart = {
        datasets: [
            {
                label: 'data',
                backgroundColor: hexToRgba(brandInfo, 10),
                borderColor: brandInfo,
                pointHoverBackgroundColor: '#fff',
                borderWidth: 2,
                data: data,
            }
        ],
    };

    return (
        <div>
            {/*<Row>
                <Col sm="7" className="d-none d-sm-inline-block">
                    <Button color="primary" className="float-right"><i className="icon-cloud-download"></i></Button>
                    <ButtonToolbar className="float-right" aria-label="Toolbar with button groups">
                        <ButtonGroup className="mr-3" aria-label="First group">
                            <Button color="outline-secondary" onClick={() => console.debug('Day')} active={true}>Day</Button>
                            <Button color="outline-secondary" onClick={() => console.debug('Month')} active={false}>Month</Button>
                            <Button color="outline-secondary" onClick={() => console.debug('Year')} active={false}>Year</Button>
                            
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(1)} active={this.state.radioSelected === 1}>Day</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(2)} active={this.state.radioSelected === 2}>Month</Button>
                            <Button color="outline-secondary" onClick={() => this.onRadioBtnClick(3)} active={this.state.radioSelected === 3}>Year</Button>
                            
                        </ButtonGroup>
                    </ButtonToolbar>
                </Col>
            </Row>*/}
            <div className="chart-wrapper" style={{ height: 300 + 'px', marginTop: 40 + 'px' }}>
                <Line data={mainChart} options={mainChartOpts} height={300} />
            </div>
        </div>
    )
}

export default memo(AggregatorChart);