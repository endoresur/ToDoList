import React, {useState} from 'react';
import {Container} from "reactstrap";

const TaskFilter = () => {
    const [completedOption, setCompletedOption] = useState("unfinished");

    const handleChange = (event) => {
        setCompletedOption(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        return completedOption;
    }

    return (
        <Container className="row g-3 w-100 p-2">
            <div className="col-md-4">
                <label className="form-label">Progress</label>
                <select
                    className="form-select"
                    value={completedOption}
                    onChange={handleChange}>
                    <option value="any">Any</option>
                    <option value="unfinished">Unfinished</option>
                    <option value="completed">Completed</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid variant of progress.
                </div>
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-2"></div>
            <div className="col-md-2">
                <label className="form-label">Submit</label>
                <button
                    className="btn btn-primary w-100"
                    onClick={handleSubmit}>
                    Input
                </button>
            </div>
        </Container>
    );
};

export default TaskFilter;