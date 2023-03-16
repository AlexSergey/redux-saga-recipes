import { useUserDetails } from '../../store/features/user-details/user-details.hook';

export const UserDetails = () => {
  const userDetails = useUserDetails();

  if (!userDetails) {
    return null;
  }
  return (
    <div className="user-details">
      <p>User Details</p>
      <ul>
        <li>email: {userDetails.email}</li>
        <li>family name: {userDetails.family_name}</li>
        <li>given name: {userDetails.given_name}</li>
      </ul>
    </div>
  )
}
