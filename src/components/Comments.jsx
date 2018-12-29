import React, {Component} from 'react'
import CommentsService from "../services/CommentsService";
import Loader from 'react-loader-spinner'


class Comments extends Component {
    state = {
        comments: [],
        loading: true
    };

    componentDidMount() {
        CommentsService
            .all()
            .then(results => {
                return results.data
            })
            .then(data => {
                console.log(data)
                let comments = data.map(comment => {
                    return (
                        <tr key={comment.name}>
                            <td>{comment.name}</td>
                            <td>{comment.body}</td>
                        </tr>
                    )
                })
                this.setState({loading: false});
                this.setState({comments})
            })

    }

    render() {
        const {loading} = this.state
        if (loading) {
            return (
                <div className="container col-xs-1"  align="center">
                    <Loader
                        type="Bars"
                        color="#00BFFF"
                        height="100"
                        width="100"
                    />
                </div>

            )
        }

        else {
            return (
                <div className="container">
                    <h1>Comments</h1>
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Body</td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.comments}
                        </tbody>
                    </table>
                </div>

            );
        }

    }

}

export default Comments
