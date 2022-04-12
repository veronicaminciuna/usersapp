import React, {Component} from 'react';

class CreateUser extends Component {
    initialState ={
        name:"",
        age:"",
    }
    state = this.initialState;
    render() {
        const {name,age} = this.state;
        return(
            <form>
                <div className='container'>
                <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input className='form-control'
                type='text'
                name="name"
                id='name'
                value={name}
                />
                </div>
                <div className='form-group'>
                <label htmlFor='age'>Age</label>
                <input className='form-control'
                type='text'
                name="age"
                id='age'
                value={age}
                />
                </div>
                </div>
            </form>
        )
    }
}

export default CreateUser;