import UsersHeader from "./UsersHeader";
import UsersBody from "./UsersBody";

const UsersContainer=(props)=> {
    const {users} = props;
    return (

        <div className="container">
            <UsersHeader/>
            <UsersBody users={users} removeUser={props.removeUser}/>
        </div>
    )
}

export default UsersContainer;