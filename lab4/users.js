// we use in memory database
let users = [
  {
    id: 1,
    name: "Amit Sharma",
    mob: "98345xxxxx",
    email: "amit.example@exam.com",
  },
  {
    id: 2,
    name: "Monika Verma",
    mob: "92345xxxxx",
    email: "moni.example@exam.com",
  },
];

let nextId = 3;

const getAllUsers = () => {
  return users;
};

export const getUsers = () => {
  return getAllUsers();
};

export const addUser = (user) => {
  user.id = nextId++;
  users.push(user);
  return user;
};

export const updateUser = (pid, updatedData) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index === -1) {
    return null;
  }

  users[index] = { ...users[index], ...updatedData, id: pid };
  return users[index];
};

export const deleteUser = (pid) => {
  const index = users.findIndex((user) => user.id === pid);
  if (index === -1) {
    return null;
  }

  const [deletedUser] = users.splice(index, 1);
  return deletedUser;
};
