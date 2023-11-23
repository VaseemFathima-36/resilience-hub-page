import React from 'react'
import './DoraMetrics.css'
import ChartjsOne from './ChartjsOne'

function DoraMetrics() {
    return (
        <div className="w-75 p-3 background">
            <div className="card background2">
                <h2 className='text-start mx-3 title'>General / DORA Metrics</h2>
                <div className="row p-3">
                    <div className="col-sm-12 mb-3 mb-sm-0">
                        <div className="row">
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <span className="card-desc">Deployment frequency per month{' '}</span>
                                        <p className="card-text text-wrap">
                                            <span className='card-1-val'>02</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <span className="card-desc">Lead Time for changes{' '}</span>
                                        <p className="card-text text-wrap">
                                            <span className='card-2-val'>23.2 <span className='subscript'>hours</span></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <span className="card-desc">Mean Time to Recover{' '}</span>
                                        <p className="card-text text-wrap">
                                            <span className='card-3-val'>02 <span className='subscript'>hours</span></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 mb-3 mb-sm-0">
                                <div className="card text-center">
                                    <div className="card-body">
                                        <span className="card-desc">Change Failure Rate{' '}</span>
                                        <p className="card-text text-wrap">
                                            <span className='card-4-val' id='card-4'>7 </span> <span className='card-4-val' id='percent'>%</span></p>
                                    </div>
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
