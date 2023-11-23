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
                <h6 className='text-start title'>
                    <span>Resilience Hub Application Name:{' '}</span>
                    <span><b>Theatre Booking</b>{' '}</span>
                    <span>version{' '}<b>V1</b></span>
                </h6>
                <div className="col-sm-4">
                    <div className='row'>
                        <div className="card">
                            <div className="card-body">
                                <h6 className="card-title">Policy name <span className="target"><b>target-17367</b></span></h6>
                                {/* Content for the first card */}
                                <table className='table table-striped table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>RTO</th>
                                            <th>RPO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data1.map((employee, index) => (
                                            <tr key={employee.Type} className={index % 2 === 0 ? 'oddRow' : 'evenRow'}>
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
                    <div className='row mt-3'>
                        <div className="card">
                            <div className="card-body card-body-1">
                                <h5 className="card-title"><h2 className='h2-title'>Resiliency Score </h2><span className="target"><b>40/100</b></span></h5>

                                {/* Content for the second card */}
                                <table className='table table-bordered table-striped'>
                                    {/* <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                        </tr>
                                    </thead> */}
                                    <tbody>
                                        {data2.map((employee, index) => (
                                            <tr key={employee.Type} className={index % 2 === 0 ? 'oddRow' : 'evenRow'}>
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
                {/* Second Column */}
                <div className="col-sm-8">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-title">
                                <span>Recommendations </span>
                                <span >
                                    <b>Assessment-report-gwsb3ymb77i</b>
                                </span>
                            </h6>
                            <h6><b>Operational Recommendations</b></h6>
                            <table className='table table-bordered table-striped'>
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
                                        <tr key={employee.Type} className={index % 2 === 0 ? 'oddRow' : 'evenRow'}>
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

                        <div className="card-body">

                            <h6><b>Reciliency Recommendations</b></h6>
                            <table className='table table-bordered table-striped'>
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
                                        <tr key={employee['Component Name']} className={index % 2 === 0 ? 'oddRow-last-table' : 'evenRow-last-table'}>
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
    );
};

export default ResilienceHub;