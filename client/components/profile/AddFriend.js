// import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams } from "react-router-dom";
// import { addFriend } from '../../store/users';
// import { Container, Button } from "react-bootstrap";
// import FriendsProfilePage from './FriendsProfilePage';

// const AddFriend = () => {
//     // const connection = useSelector((state) => state.users);
//     const { friend } = useParams();
//     const dispatch = useDispatch();
//     const [isFriend, setIsFriend] = useState()

//     useEffect(() => {
//         dispatch(addFriend(friend))
//     }, [dispatch]);

//     return (
//         <div>
//             {isFriend ? (
//                 <Container>
//                     <FriendsProfilePage />
//                 </Container>
//             ) : (
//                 <Button
//                     style={{ 
//                         borderRadius: "0px",
//                         backgroundColor: "#48CAE4",
//                         color: "white",
//                         fontWeight: "800",
//                     }}
//                     variant="info"
//                     onClick={() => {
//                         setIsFriend()
//                     }}
//                 >

//                 </Button>
//             )}
//         </div>
//     )
// };

// export default AddFriend;