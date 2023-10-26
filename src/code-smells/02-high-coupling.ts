(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = "M" | "F";

  // High Coupling - Altamente acopladas

  class Person {
    constructor(
      public firstName: string,
      public lastName: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(firstName, lastName, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastFolderOpen: string,
      email: string,
      role: string,
      firstName: string,
      lastName: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, new Date(), firstName, lastName, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/urs/home",
    "/development",
    "jessica@google.com",
    "F",
    "Jessica",
    "Apolinar",
    "M",
    new Date("1991-06-22")
  );

  console.log({ userSettings, credentials: userSettings.checkCredentials() });
})();
