// import Card from 'react-bootstrap/Card';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import { getSinglePlayer } from '../../api/teamData';

// const ViewTeamMember = () => {
//   const currentUserUid = firebase.auth().currentUser.uid;
//   const router = useRouter();
//   const { firebaseKey } = router.query;

//   const [teamMember, setTeamMember] = useState(null);

//   useEffect(() => {
//     getSinglePlayer(firebaseKey)
//       .then((fetchedTeamMember) => {
//         const teamMemberData = fetchedTeamMember[firebaseKey];
//         setTeamMember(teamMemberData);
//       })
//       .catch((error) => {
//         console.error('Error fetching team member: ', error);
//       });
//   }, [firebaseKey]);

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       {teamMember && teamMember.uid === currentUserUid && <Card.Img variant="top" src={teamMember.image} alt={teamMember.name} style={{ height: '400px' }} />}
//     </Card>
//   );
// };
// export default ViewTeamMember;
