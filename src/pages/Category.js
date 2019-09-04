import React, { Component } from 'react';
import Model from './../components/Category/Model';
import { connect } from 'react-redux';
import * as action from './../actions/category';
import { emptyStatement } from '@babel/types';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openModel: true,
        }
    }
    toggleModel = () => {
        this.setState({
            ...this.state,
            openModel: !this.state.openModel
        });
    }
    componentDidMount() {
        this.props.getCategories();
    }
    categories() {
        const { categories,languages } = this.props;
        let cats;
        if (Array.isArray(categories.data) && categories.data.length) {
            cats = categories.data.map((category, key) => {
                let parent="";
                if(category.parent.data.length){
                    category.parent.data.forEach(element => {
                        categories.data.forEach((cat) => {
                            if(element.path_id === cat.id){
                                parent += `${cat.description.en.name} `;
                            }
                        });
                    });
                }
                return <tr key={key}>
                    <td scope="row">{category.id}</td>
                    <td>{category.description.en.name}</td>
                    <td>{parent}</td>
                    <td>
                        <button type="button" className="btn btn-success">Edit</button>
                        <button type="button" className="btn btn-warning">Delete</button>
                    </td>
                </tr>;

                }
            );

        }
        //console.log(cats);
        return cats;

    }
    render() {
        const { openModel } = this.state;
        const { categories,languages } = this.props;
        // console.log(languages);
        return (
            <>
                <button
                    onClick={this.toggleModel}
                    type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
                    Add
                </button>
                {openModel ? <Model /> : ""}

                <table className="table">
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Parent</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.categories()}

                    </tbody>
                </table>
            </>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        categories: state.categories,
        languages: state.languages,
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        getCategories: () => {
            dispatch(action.GET_LIST_REQUEST());
        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Category);