import { useUsersHook } from './store/features/user/user.hook';
import { useEffect } from 'react';
import { UserCard } from './components/user-card';
import { Button } from 'antd';

export const App = () => {
  const [, , fetchUser] = useUsersHook();

  useEffect(() => {
    fetchUser()
  }, []);

  return (
    <div className="app">
      <div className="button-wrapper">
        <Button type="primary" onClick={fetchUser}>Fetch user again</Button>
      </div>
      <UserCard />
    </div>
  )
}
