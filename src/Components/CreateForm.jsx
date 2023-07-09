import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './style.css'
import { createUser } from '../features/userDetailsSlice'
import { useNavigate } from 'react-router-dom'

const CreateForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [users, setUsers] = useState({})

    const getValues = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value })
        // console.log(users);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createUser(users))
        navigate('/lists')
    }

    return (
        <div className='createForm'>
            <h1>Fill the data...</h1>
            <form onSubmit={handleSubmit} className="form">
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => { getValues(e) }} name='name' type="text" id='name' placeholder="Name" />
                </div>
                <div className="inputs">
                    <label htmlFor="age">Age</label>
                    <input onChange={(e) => { getValues(e) }} name='age' type="number" id='age' placeholder="Age" />
                </div>

                <div className="inputs">
                    <label htmlFor="email">Email</label>

                    <input onChange={(e) => { getValues(e) }} name='email' type="email" id='email' placeholder="E-mail" />
                </div>

                <div className="inputs radio">

                    <input onChange={(e) => { getValues(e) }} type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>

                    <input onChange={(e) => { getValues(e) }} type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>

                </div>

                <button type='submit' >Submit</button>

            </form>
        </div >
    )
}

export default CreateForm