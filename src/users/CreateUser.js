import React, {Component} from 'react';

class CreateUser extends Component {
    initialState ={
        name:"",
        age:"",
    }
    state = this.initialState;

    formUser=(event)=> {
        const {name,value} = event.target;
        this.setState({
            [name]:value,
        })
        console.log(this.state)
    }

    addUser=()=> {
        this.props.addUser(this.state);
        this.setState(this.initialState);//reset state to the initial state
    }

    render() {
        const {name,age} = this.state;
        return(
            <form>
                <h1>Add User</h1>
                <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input className='form-control'
                type='text'
                name="name"
                id='name'
                value={name}
                onChange={this.formUser}
                />
                </div>
                <div className='form-group'>
                <label htmlFor='age'>Age</label>
                <input className='form-control'
                type='text'
                name="age"
                id='age'
                value={age}
                onChange={this.formUser}
                />
                </div>
                <input className='btn btn-primary' type="button" value="Submit" onClick={this.addUser}/>
            </form>
        )
    }
}

export default CreateUser;