import { Formik, Field, Form, ErrorMessage } from "formik"
import style from './CreateDishesForm.module.css'
import { createDish } from "../../redux/actions/actions"
import { useDispatch } from "react-redux"
import * as Yup from 'yup'
import { Link } from "react-router-dom"

const CreateDishesForm = () => {
    const dispatch = useDispatch()
    

    return (
    <div className={style.mainContainer}>

        <Formik
        initialValues={{
            name: "",
            description: "",
            image:null,
            price: null,
            category: ""
        }}
        onSubmit={async (values, actions) => {
            dispatch(createDish(values))
            window.alert("Plato creado correctamente");
        }}
        validationSchema = {Yup.object({
            name: Yup.string().required("Name is required"),
            description: Yup.string().required("description is required"),
            price: Yup.number().required("price is required"),
            category: Yup.string().required("category is required")
        })}
        >

        {({handleSubmit, setFieldValue}) => (
            <Form onSubmit={handleSubmit} onChange={()=>{}} className={style.formContainer}>
                <label htmlFor="">Name:</label>
                <Field name="name" placeholder="name"  />
                <ErrorMessage name="name"/>

                <label htmlFor="">Description:</label>
                <Field name="description" placeholder="description"    />
                <ErrorMessage name="description"/>
                
                <label htmlFor="">Price:</label>
                <Field name="price" placeholder="price" type="number"  />
                <ErrorMessage name="price"/>

                <label htmlFor="">Category: </label>
                <Field name="category" placeholder="category"  />
                <ErrorMessage name="category"/>

                <label htmlFor="">Image:</label>
                <input type="file" name="image" onChange={(e)=>setFieldValue('image', e.target.files[0])}/>
                <ErrorMessage name="image"/>

                <button type="submit" className={style.button}>Create!</button>
            <Link to="/menu">
                <button className={style.volver}>Volver</button>
            </Link>
            </Form>
        )}
        </Formik>
    </div>
    )
}

export default CreateDishesForm