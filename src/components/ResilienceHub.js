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
        <div className="cards-layout">

            {/* First Column */}
            <div className="column">
                <h2 className='h2-style'>Resilience Hub Application Name:<b>Threatre Booking</b></h2>
                <div className="card card-1">
                    <div className="card-body card-body-1">
                        {/* <h5 className="card-title"><b>Policy Name<h2>target-17004</h2></b></h5> */}

                        <h2 class="card-title">
                            <span class="policy-name">Policy name</span>
                            <span class="target-name"> target-17367</span>
                        </h2>

                        {/* Content for the first card */}
                        <table className='table-1'>
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

                <div className="card card-1">
                    <div className="card-body card-body-1">
                        <h5 className="card-title"><h2 className='h2-title'>Resiliency Score </h2><span className="target"><b>40/100</b></span></h5>

                        {/* Content for the second card */}
                        <table className='table-2'>
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

            {/* Second Column */}
            <div className="column">
                <div className="big-card big-card-style">
                    <div className="card-body">
                        <h5 className="card-title"><h2 style={{ marginTop: '1rem' }}>Recommendations </h2><span className="target"><b style={{ color: 'black', marginTop: '2rem' }}>Assessment-report-gwsb3ymb77i</b></span></h5>
                        <b className='big-card-heading-2'>Operational Recommendations</b>
                        <table>
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

                        <b className='big-card-heading-2'>Reciliency Recommendations</b>
                        <table>
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
    );
};

export default ResilienceHub;