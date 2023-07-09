import { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, showUser } from '../features/userDetailsSlice'
import Popup from './Popup'
import { Link } from 'react-router-dom'



const Lists = () => {
    const [show, setShow] = useState(false)
    const [id, setId] = useState()

    const dispatch = useDispatch()
    const { users, loading, searchData } = useSelector(state => state.userDetails)

    // console.log(searchData);
    // console.log(users);

    useEffect(() => {
        dispatch(showUser())
    }, [])

    if (loading) {
        return (<h2 style={{ textAlign: 'center', margin: '30px' }}>Loading</h2>)
    }


    const showPopup = (id) => {
        setShow(true)
        setId(id)
    }

    return (

        <>

            {show && <Popup id={id} setShow={setShow} />}

            <div  >

                <h2 style={{ textAlign: 'center', margin: '30px' }} >  All Data</h2>

                <div className="lists">

                    {users.length === 0 && <h1> No user data found </h1>}

                    {users && users.filter(user => {
                        if (searchData.length === 0) {
                            return user
                        }
                        else {
                            return user.name.toLowerCase().includes(searchData.toLowerCase())
                        }
                    })


                        .map(({ id, name, age, email, gender }) => {
                            return (
                                <div key={id} className="card" style={{ width: '18rem' }}>
                                    <div className="card-body  d-flex flex-column justify-content-center align-items-center">
                                        <h5 className="card-title"> Name :  {name}</h5>
                                        <p className="card-text "> Email : {email}</p>
                                        <p className="card-text"> Gender : {gender.toUpperCase()}</p>
                                        <p className="card-text"> Age : {age}</p>
                                        <div>
                                            <button onClick={() => { showPopup(id) }} >View</button>
                                            <Link to={`/updateUser/${id}`} ><button >Edit</button></Link>
                                            <button onClick={() => { dispatch(deleteUser(id)) }} >Delete</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div >

        </>
    )
}

export default Lists