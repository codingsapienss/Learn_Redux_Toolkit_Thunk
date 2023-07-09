import { useNavigate, useParams } from 'react-router-dom'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { updateUser } from '../features/userDetailsSlice'
const UpdateUser = () => {
    const navigate = useNavigate()
    const [updatedData, setUpdatedData] = useState()

    const dispatch = useDispatch()
    // console.log(updatedData);

    const { id } = useParams()

    const { users } = useSelector(state => state.userDetails)

    useEffect(() => {
        if (id) {
            const user = users.filter(user => id === user.id)
            setUpdatedData(user[0])
        }

    }, [])

    const update = (e) => {
        e.preventDefault()
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateUser(updatedData))
        navigate('/lists')

    }



    return (
        <div className='createForm'>
            <h1>Update the data...</h1>
            <form
                onSubmit={handleSubmit}
                className="form">
                <div className="inputs">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={update}
                        value={updatedData && updatedData.name}
                        name='name' type="text" id='name' placeholder="Name" />
                </div>
                <div className="inputs">
                    <label htmlFor="age">Age</label>
                    <input
                        onChange={update}
                        value={updatedData && updatedData.age}
                        name='age' type="number" id='age' placeholder="Age" />
                </div>

                <div className="inputs">
                    <label htmlFor="email">Email</label>

                    <input
                        onChange={update}
                        value={updatedData && updatedData.email}
                        name='email' type="email" id='email' placeholder="E-mail" />
                </div>

                <div className="inputs radio">

                    <input
                        onChange={update}
                        checked={updatedData && updatedData.gender === 'male'}
                        type="radio" id="male" name="gender" value="male" />
                    <label htmlFor="male">Male</label>

                    <input
                        onChange={update}
                        checked={updatedData && updatedData.gender === 'female'}
                        type="radio" id="female" name="gender" value="female" />
                    <label htmlFor="female">Female</label>

                </div>

                <button type='submit' >Submit</button>

            </form>
        </div >
    )
}

export default UpdateUser