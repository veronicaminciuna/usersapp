const UsersBody=(props)=> {
    const usersTemplate = props.users.map((value, index)=> {
        const {name, age} = value;
        return (
            <div key ={index} className="row border-bottom border-secondary p-2">
             <div className="col">
                 {name}
             </div>
             <div className="col">
                 {age}
             </div>
             <div className="col">
                 <button onClick={()=> props.removeUser(index)} className="btn btn-primary">Delete</button>
                 </div>
             </div>
        )
    })
    return <div>{usersTemplate}</div>
}

export default UsersBody;