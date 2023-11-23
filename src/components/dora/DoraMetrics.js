import React from 'react'
import './DoraMetrics.css'
import ChartjsOne from './ChartjsOne'

const data1 = "02";
const data2 = "23.2";
const data3 = "02";
const data4 = "7";


function DoraMetrics() {
    return (
        <div className="w-75 p-3 background">
            <div className="card background2">
                <h2 className='text-start mx-3 title pt-3'>General / DORA Metrics</h2>
                <div className="row p-3">
                    <div className="col-sm-12 mb-3 mb-sm-0">
                        <div className="row">
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center h-100 pb-2">
                                    <div className="card-body">
                                        <span className="card-desc">Deployment frequency per month{' '}</span>
                                    </div>
                                    <div className="card-text text-wrap card-1-val">
                                        {data1}</div>
                                </div>
                            </div>
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center h-100 pb-2">
                                    <div className="card-body">
                                        <span className="card-desc">Lead Time for changes{' '}</span>
                                    </div>
                                    <div className="card-text text-wrap card-2-val">
                                        {data2} <span className='subscript'>hours</span></div>
                                </div>
                            </div>
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center h-100 pb-2">
                                    <div className="card-body">
                                        <span className="card-desc">Mean Time to Recover{' '}</span>
                                    </div>
                                    <div className="card-text text-wrap card-3-val">
                                        {data3}{' '}<span className='subscript'>hours</span></div>
                                </div>
                            </div>
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center h-100 pb-2">
                                    <div className="card-body">
                                        <span className="card-desc">Change Failure Rate{' '}</span>
                                    </div>
                                    <div className="card-text text-wrap card-4-val" id='card-4'>
                                        {data4} <span className='card-4-val' id='percent'>%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row p-3 mb-5">
                    <div className="col-sm-6 mb-4 mb-sm-0">
                        <div className='card'>
                            <ChartjsOne />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoraMetrics
