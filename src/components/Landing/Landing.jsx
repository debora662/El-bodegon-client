import { useNavigate } from "react-router-dom"

const Landing = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Landing</h1>
            <button onClick={() => navigate('/home')}>START</button>
        </div>
    )
}

export default Landing