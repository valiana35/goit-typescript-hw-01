type Address = {
    city: string;
    country: string;
  }

type NewUser = {
  name: string;
  age: number;
  email: string;
  address?: Address;
};

const mango: NewUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: NewUser = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
};
