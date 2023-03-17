import { useSelector } from "react-redux"

const CategoryFltr = () => {

    const categorys = useSelector(state => state.categorys);

    return (
        <div>
            {categorys.map( (category, i) => <button style={{ width:'120px', height:'30px' }} value={category.name} key={i} >{category.name}</button> )}
        </div>
    )
}

export default CategoryFltr