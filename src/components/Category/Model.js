import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ADD_REQUEST } from './../../actions/category'
class Model extends Component {
    state = {
        icon: "",
        image: false,
        parent_id: 0,
        sort_order: 0,
        status: 0,
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? (e.target.checked) : e.target.value
        });
    }
    onAdd = () => {
        this.props.addCategory(this.state);
    }
    render() {
        return (
            <div tabIndex="{-1}" role="dialog" style={{ position: "fixed", top: 90, width: "100%" }}>


                <div className="modal-dialog model" role="document" style={{ maxWidth: "none", margin: 0 }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">ADD</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body container-fluid">
                            <div class="row">
                                <div class="col-xs-4">
                                    <div className="form-group">
                                        <label>Title</label>
                                        <input
                                            onChange={(e) => this.onChange(e)}
                                            type="text" className="form-control" aria-describedby="helpId" name="title"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Icon</label>
                                        <input type="file" className="form-control-file" aria-describedby="fileHelpId" />

                                    </div>
                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file" className="form-control-file" aria-describedby="fileHelpId" />

                                    </div>
                                    <div className="form-group">
                                        <label>Parent</label>
                                        <select multiple className="form-control" name="">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <label className="form-check-label">
                                            <input className="form-check-input" type="checkbox" defaultValue="checkedValue" /> Active
                                </label>
                                    </div>
                                </div>
                                <div class="col-xs-8">
                                    <div>
                                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
                                            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
                                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button
                                    onClick={this.onAdd}
                                    type="button" className="btn btn-primary"
                                >Save</button>
                            </div>
                        </div>
                    </div>




                </div>
            </div>
        );
    }
}
const mapStateToProps = () => {
    return {

    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        addCategory: (payload) => {
            dispatch(ADD_REQUEST(payload))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Model);