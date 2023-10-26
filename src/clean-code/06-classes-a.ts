(() => {
  type Gender = "M" | "F";
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
    }
  }

  const user = new User(
    "jessica@email.com",
    "software engineer",
    new Date(),
    "Jessica Apolinar",
    "F",
    new Date("1991-06-22")
  );

  console.log(user);
  
})();
