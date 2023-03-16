import { useUsersHook } from '../../store/features/user/user.hook';
import { UserGroup } from './user-group.component';
import { UserDetails } from './user-details.component';
import { UserAvatar } from './user-avatar.component';
import { UserError } from './user-error.component';

export const UserCard = () => {
  const [, error] = useUsersHook();

  if (error) {
    return <UserError />;
  }

  return (
    <div className="user-card">
      <UserAvatar />
      <div className="user-data-wrapper">
        <UserGroup />
        <UserDetails />
      </div>
    </div>
  )
}
