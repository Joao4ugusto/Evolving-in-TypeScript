export{};

// Example 01 --> intersection types

interface DataBank {
  account: number;
  agency: number;
  bank: string
}

interface Client {
  name: string;
  email: string;
}

interface IndividualData {
  cpf: string;
}

type Customerdata = DataBank & Client & IndividualData;

const dadosCliente: Customerdata = {
  account: 1234,
  agency: 120,
  bank: 'Branrisul',
  name: 'João Augusto',
  email: 'joaoaugusto@gmail.com',
  cpf: "04350409017"
}

// Example 02 --> Intersection Types

interface IAddress {
  road: string;
  neighborhood: string;
  city: string;
}

interface IPerson {
  name: string;
  age: number;
  profession: string;
}

type IAddressPerson = IAddress & IPerson;

const addressPerson: IAddressPerson = {
  name: 'Glaucia Lemos',
  age: 36,
  profession: 'Software Engineer',
  road: 'Rua das Tulipas',
  neighborhood: 'Bairro das Tulipas',
  city: 'Rio de Janeiro',
};

console.log(addressPerson);