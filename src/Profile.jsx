function Profile({name, stack, experience}){
    return(
        <>
            <h2>{name}</h2>
            <p>{stack}</p>
            <p>{experience}</p>
        </>
    )
}

export default Profile