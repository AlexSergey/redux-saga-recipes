import { useUserGroup } from '../../store/features/user-group/user-group.hook';
import { Tag } from 'antd';

export const UserGroup = () => {
  const userGroup = useUserGroup();

  if (!userGroup) {
    return null;
  }

  return (
    <div className="user-group">
      <p className="user-group-title">user group:</p>
      <Tag color="magenta">{userGroup.name}</Tag>
    </div>
  )
}
