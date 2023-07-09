/* eslint-disable react/prop-types */

import { useSelector } from "react-redux"

const Popup = ({ setShow, id }) => {
    const users = useSelector(state => state.userDetails.users)
    const user = users?.filter(user => id === user.id)
    // console.log(user);
    return (
        <div className="popupContainer">

            <div className="popupBackground">
                <div className="popup">
                    <span onClick={() => { setShow(false) }} className="cross"> ❌ </span>
                    <div className="content">
                        <h1> {user[0]?.name}</h1>
                        <h2> {user[0]?.email}</h2>
                        <h2> {user[0]?.gender}</h2>
                        <h2> {user[0]?.age}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup