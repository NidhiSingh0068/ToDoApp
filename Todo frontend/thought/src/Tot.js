import React from "react";
import axios from "axios";
  
class Tot extends React.Component {
    state = {
        details: [],
        todo: "",

    };
  
    componentDidMount() {
        let data;
  
        axios
            .get("http://localhost:8000/todo/")
            .then((res) => {
                data = res.data;
                this.setState({
                    details: data,
                });
            })
            .catch((err) => {});
    }
  
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/todo/", {
                thought: this.state.todo,
            })
            .then((res) => {
                this.setState({
                   todo: "",
                });
            })
            .catch((err) => {});
    };
  
    render() {
        return (
            <div className="container">
              <div className="w-175  mx-auto shadow p-5">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Add Todo
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Enter Todo..."
                               aria-label="Todo"
                               aria-describedby="basic-addon1"
                               value={this.state.thought} name="todo"
                               onChange={this.handleInput} />
                    </div>
                    
  
                    <button type="submit" className="btn btn-primary mb-5">
                        ADD
                    </button>
                </form>
  

                <table className="table border shadow" id="table1">
                       <thead className="thead-dark">
                      <tr>
                       <th scope="col">S No.</th>
                       <th scope="col">Todo</th>
                       <th scope="col">Action</th>
                   </tr>
              </thead>
                <tbody>
                {this.state.details.map((detail, id) => (
                    <tr key={id}>
                        <th scope="row">{id+1}</th>
                       <td>{detail.todo}</td>
                       <td>
                           <button
                             className="btn btn-secondary mr-2"
                            >
                          Edit
                         </button>
                         <button
                            className="btn btn-danger"
                         >
                          Delete
                        </button>
                    </td>
                </tr>


          
                ))}
              </tbody>
         </table>
     </div>
     </div>
        );
    }
}
export default Tot;