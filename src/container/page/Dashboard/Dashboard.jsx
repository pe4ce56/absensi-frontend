import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Header } from '../../../component/MainPage'
import ActionType from '../../../redux/reducer/globalActionType'

class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="row">
                    <div className="col-xl-8">

                    </div>
                </div>
            </React.Fragment>
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
