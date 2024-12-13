interface Profile {
  name: string;
  age: number;
  email: string;
}

const updateProfile = <T extends Profile, K extends Partial<Profile>>(
  profile: T,
  info: K
): T => {
  return { ...profile, ...info };
};

const myProfile: Profile = {
  name: "Alice",
  age: 25,
  email: "alice@example.com",
};
console.log(updateProfile(myProfile, { name: "abdullah" }));
