import React from 'react';
import './ResilienceHub.css';

const ResilienceHub = () => {
    const data1 = [
        { Type: 'App', RTO: '4h', RPO: '1h' },
        { Type: 'Infra', RTO: '4h', RPO: '1h' },
        { Type: 'Availability Zone', RTO: '4h', RPO: '1h' },

    ];

    const data2 = [
        { Type: 'RTO/RPO compliance', Score: 40 / 40 },
        { Type: 'Alarms implemented', Score: 0 / 20 },
        { Type: 'SOPs implemented', Score: 0 / 20 },
        { Type: 'FIS experiments implemented', Score: 0 / 20 },

    ];

    const data3 = [
        { Type: 'Alarm', Name: 'AWSReselienceHub-EKSDe...', State: 'Not implemented', Description: 'An Alarm...', AppComponents: 'ComputeAppComponent-EKSDe...' },
        { Type: 'Alarm', Name: 'AWSReselienceHub-EKSDe...', State: 'Not implemented', Description: 'An Alarm...', AppComponents: 'ComputeAppComponent-EKSDe...' },
        { Type: 'SOP', Name: 'AWSReselienceHub-EKSDe...', State: 'Not implemented', Description: 'An Alarm...', AppComponents: 'ComputeAppComponent-EKSDe...' },

        { Type: 'SOP', Name: 'AWSReselienceHub-EKSDe...', State: 'Not implemented', Description: 'An Alarm...', AppComponents: 'ComputeAppComponent-EKSDe...' },

        { Type: 'FIS', Name: 'AWSReselienceHub-EKSDe...', State: 'Not implemented', Description: 'An Alarm...', AppComponents: 'ComputeAppComponent-EKSDe...' },

    ];

    const data4 = [
        { 'Component Name': 'DbAppComponent-1', Type: 'AWS::ResilienceHub...', 'Current Compliance': "Meets", 'Recommended compliance': 'Meets' },
        { 'Component Name': 'CompAppCompEKS-1', Type: 'AWS::ResilienceHub...', 'Current Compliance': "Meets", 'Recommended compliance': 'Meets' },
        { 'Component Name': 'CompAppCompEKS-1', Type: 'AWS::ResilienceHub...', 'Current Compliance': "Meets", 'Recommended compliance': 'Meets' },
        { 'Component Name': 'CompAppCompEKS-1', Type: 'AWS::ResilienceHub...', 'Current Compliance': "Meets", 'Recommended compliance': 'Meets' },


    ];



    return (
        <div className="w-75 p-3 main-background">

            {/* First Column */}
            <div className='row'>
                <h6>
                    <span className='me-1'>Resilience Hub Application Name:</span>
                    <span className='me-2'><b>Theatre Booking</b></span>
                    <span className='me-1'>version</span>
                    <span><b>V1</b></span>
                </h6>
                <div className="col-sm-4">
                    <div className='row'>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title mt-3 mb-4">
                                    <span className='pn-title me-2'>Policy name
                                    </span>
                                    <span className="pn-target"><b>target-17367</b></span>
                                </h6>
                                {/* Content for the first card */}
                                <div className='table-responsive'>
                                    <table className='table table-striped1 table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Type</th>
                                                <th>RTO</th>
                                                <th>RPO</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data1.map((employee, index) => (
                                                <tr key={employee.Type}>
                                                    <td>{employee.Type}</td>
                                                    <td>{employee.RTO}</td>
                                                    <td>{employee.RPO}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='row mt-4'>
                        <div className="card">
                            <div className="card-body">
                                <h6 className='mt-3 mb-4'>
                                    <span className='rs-title me-2'>Resiliency Score</span>
                                    <span className='pn-sub-text'><b>
                                        <span className='rs-top-text'>40</span>
                                        /100</b>
                                    </span>
                                </h6>

                                {/* Content for the second card */}
                                <div className='table-responsive'>
                                    <table className='table table-bordered table-striped1'>
                                        <tbody>
                                            {data2.map((employee, index) => (
                                                <tr key={employee.Type}>
                                                    <td>{employee.Type}</td>
                                                    <td>{employee.Score}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* Second Column */}
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-title mb-1">
                                <span>Recommendations </span>
                                <span >
                                    <b>Assessment-report-gwsb3ymb77i</b>
                                </span>
                            </p>
                            <p className='or-title mb-2'><b>Operational Recommendations</b></p>
                            <div className='table-responsive'>
                                <table className='table table-bordered table-striped1'>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>Name</th>
                                            <th>State</th>
                                            <th>Description</th>
                                            <th>AppComponents</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data3.map((employee, index) => (
                                            <tr key={employee.Type}>
                                                <td>{employee.Type}</td>
                                                <td className='name-link-style'>{employee.Name}</td>
                                                <td>{employee.State}</td>
                                                <td>{employee.Description}</td>
                                                <td>{employee.AppComponents}</td>

                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <div className="card-body pt-0">

                            <p className='rr-title mb-2'><b>Resiliency Recommendations</b></p>
                            <div className='table-responsive'>
                                <table className='table table-bordered table-striped1'>
                                    <thead>
                                        <tr>
                                            <th>Component Name</th>
                                            <th>Type</th>
                                            <th>Current Compliance</th>
                                            <th>Recommended compliance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data4.map((employee, index) => (
                                            <tr key={employee['Component Name']}>
                                                <td className='name-link-style'>{employee['Component Name']}</td>
                                                <td>{employee.Type}</td>
                                                <td>{employee['Current Compliance']}</td>
                                                <td>{employee['Recommended compliance']}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default ResilienceHub;