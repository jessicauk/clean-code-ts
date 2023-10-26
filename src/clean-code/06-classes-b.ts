(() => {

  // Sin principio de responsabilidad unica
  
  type Gender = "M" | "F";

  interface PersonProps {
    gender: Gender;
    birthdate: Date;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    name: string;
    role: string;
  }

  class User extends Person {
    public lastAccess: Date;
    public email: string;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }
  }

  interface UserSettingsProps {
    birthdate: Date;
    email: string;
    gender: Gender;
    lastOpenFolder: string;
    name: string;
    role: string;
    workingDirectory: string;
  }

  class UserSettings extends User {
    public lastOpenFolder : string;
    public workingDirectory : string;

    constructor({
      birthdate,
      email,
      gender,
      lastOpenFolder,
      name,
      role,
      workingDirectory,
    }: UserSettingsProps) {
      super({ birthdate, email, gender, name, role });
      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const user = new User({
    birthdate: new Date("1991-06-22"),
    email: "jessica@email.com",
    gender: "F",
    name: "Jessica Apolinar",
    role: "software engineer",
  });
  const userDirectory = new UserSettings({
    birthdate: new Date("1991-06-22"),
    email: "jessica@email.com",
    gender: "F",
    lastOpenFolder: "/user/home",
    name: "Jessica Apolinar",
    role: "software engineer",
    workingDirectory: "/home",
  });

  console.log(user);
  console.log(userDirectory);
})();
