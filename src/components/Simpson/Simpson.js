const Simpson = (props) => {
    const {name, surname, image} = props;
    return (
        <div>
            <div>
                <div>Name: {name}</div>
                <div>Surname: {surname}</div>
                <img src={image} alt={name}/>
            </div>
        </div>
     );
};

export {
    Simpson
};