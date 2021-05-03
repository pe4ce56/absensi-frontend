import React, { Component } from 'react'
import { connect } from 'react-redux'
import ActionType from '../../../redux/reducer/globalActionType'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row">
                <div className="col-xl-8">
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" value={this.props.store.username} onChange={e => this.props.dispatch.handeChangeUsername(e.target.value)} />
                        <small id="helpId" className="form-text text-muted">{this.props.store.username}</small>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card">
                        <div className="card-header border-0">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="mb-0">Page visits</h3>
                                </div>
                                <div className="col text-right">
                                    <a href="#!" className="btn btn-sm btn-primary">See all</a>
                                </div>
                            </div>
                        </div>
                        <div className="table-responsive">
                            {/* Projects table */}
                            <table className="table align-items-center table-flush">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Page name</th>
                                        <th scope="col">Visitors</th>
                                        <th scope="col">Unique users</th>
                                        <th scope="col">Bounce rate</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            /argon/
        </th>
                                        <td>
                                            4,569
        </td>
                                        <td>
                                            340
        </td>
                                        <td>
                                            <i className="fas fa-arrow-up text-success mr-3" /> 46,53%
        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            /argon/index.html
        </th>
                                        <td>
                                            3,985
        </td>
                                        <td>
                                            319
        </td>
                                        <td>
                                            <i className="fas fa-arrow-down text-warning mr-3" /> 46,53%
        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            /argon/charts.html
        </th>
                                        <td>
                                            3,513
        </td>
                                        <td>
                                            294
        </td>
                                        <td>
                                            <i className="fas fa-arrow-down text-warning mr-3" /> 36,49%
        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            /argon/tables.html
        </th>
                                        <td>
                                            2,050
        </td>
                                        <td>
                                            147
        </td>
                                        <td>
                                            <i className="fas fa-arrow-up text-success mr-3" /> 50,87%
        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            /argon/profile.html
        </th>
                                        <td>
                                            1,795
        </td>
                                        <td>
                                            190
        </td>
                                        <td>
                                            <i className="fas fa-arrow-down text-danger mr-3" /> 46,53%
        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        store: state
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: {
        handeChangeUsername: (value) => dispatch({ type: ActionType.CHANGE_USERNAME, username: value })
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
