

const SimpsonDOM = ({arg:value}) => (
    <div className='container'>

        <div>id - {value.id}</div>
        <div>name - {value.name}</div>
        <div>species - {value.species}</div>
        <div>gender - {value.gender}</div>
            <div> image - <img className='image' src={value.image}/></div>
        <div>status - {value.status}</div>



    </div>)



export default SimpsonDOM