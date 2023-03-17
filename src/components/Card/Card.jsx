const Card = ({ dish }) => {
    return (
        <div style = {{ width:'400px', height:'350px', border: '10px solid red' }}>
            <h3>{dish.name}</h3>
            <img style = {{ width:'200px', height:'200px'}} src={dish.image} alt="Loading..." />
        </div>
    )
}

export default Card