export interface IUser {
  user_id: string;
}

export interface IUserGroup {
  user_id: string;
  name: string;
}

export interface IUserDetails {
  user_id: string,
  email: string,
  given_name: string,
  family_name: string,
  details: {
    phone_number: string,
    preferred_language: string
  }
}
