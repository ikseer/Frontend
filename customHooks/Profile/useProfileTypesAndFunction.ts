// Main

// Interface
export interface updateUserProfileType {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  date_of_birth: string;
  timezone: string;
  gender: string;
  [key: string]: string;
}

// Functions

// Handle Update Profile data
const newObject = {} as updateUserProfileType;
export const handleUpdateDate = (data: updateUserProfileType) => {
  for (const key in data) {
    if (key === 'image') continue;
    newObject[key] = data[key];
  }
  return newObject;
};
