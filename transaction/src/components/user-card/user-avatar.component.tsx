import { useUserAvatar } from '../../store/features/user-avatar/user-avatar.hook';
import { Image } from 'antd';

export const UserAvatar = () => {
  const avatar = useUserAvatar();

  if (!avatar) {
    return null;
  }
  return (
    <div className="avatar">
      <Image width={150} height={150} src={avatar} />
    </div>
  )
}
