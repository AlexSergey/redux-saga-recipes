import { Alert } from 'antd';

export const UserError = () => {
  return (
    <Alert
      message="User error"
      description="Something went wrong. Please, try again later."
      type="error"
    />
  )
}
