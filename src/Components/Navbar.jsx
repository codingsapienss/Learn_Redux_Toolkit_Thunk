
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { search } from "../features/userDetailsSlice"

const Navbar = () => {
    const userCount = useSelector(state => state.userDetails.users.length)
    const [searchData, setSearchData] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(search(searchData))
    }, [searchData])
    // console.log(searchData);

    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to='/' style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.3rem' }}>Learn Redux Toolkit (Thunk)</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link to='/' style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.3rem' }}>Create Post</Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link to='/lists' style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.3rem' }} >All Post <span className="userCount">{(userCount)}</span> </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2"
                                onChange={(e) => {
                                    setSearchData(e.target.value)

                                }}
                                type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar