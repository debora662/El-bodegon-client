import style from "./Pagination.module.css"

const Pagination = ({totalDishes, dishesPerPage, setCurrentPage, currentPage}) => {
    const pages = []
    
    for (let i = 1; i <= Math.ceil(totalDishes/dishesPerPage); i++) {
        pages.push(i)
    }
    const handleClick = (page) =>{
        setCurrentPage(page);
        window.scrollTo(0, 0)
    }
    const handlePrev = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1)
        }
        return
    }
    const handleNext = () => {
        if(currentPage < totalDishes/dishesPerPage){
            setCurrentPage(currentPage + 1)
        }
        return
    }
    return (
        <div className={style.buttonContainer}>
            <a onClick={()=> handlePrev()}>Prev</a>
            {pages.map((page) =>{
                return (
                   <button 
                   key={page} 
                   onClick={() => handleClick(page)} 
                   className={page === currentPage ? style.active : ""}>
                        {page}
                    </button>
                )
            })}
            <a onClick={()=> handleNext()}>Next</a>
        </div>
    )
}

export default Pagination