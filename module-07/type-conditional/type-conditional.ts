export{}

// Example 01 --> conditional types

type Person = {
  name: string;
  age: number;
  address: string;
};

type Company = {
  name: string;
  cnpj: number;
}

type AddressPerson = {
   secondaryAddress: string;
   city: string;
   country: string;
}

type AddressCompany = {
  location: 'road' | 'avenue' | 'square';
}

type AddressFinal<T> = T extends {address: string} ? AddressPerson : AddressCompany;

const addresPerson: AddressFinal<Person> = {
  secondaryAddress: 'Rua 2',
  city: 'São Paulo',
  country: 'Brasil',
};

const addressCompany: AddressFinal<Company> = {
  location: 'road',
};

console.log(addresPerson);
console.log(addressCompany);

// Example 02 --> conditional types

type FormatoArquivos = 'png' | 'jpg' | 'gif' | 'svg' | 'mp4' | 'mp3';

type FiltrarArquivoAudio<T> = T extends 'mp4' | 'mp3' ? T : never;

type ArquivoAudio = FiltrarArquivoAudio<FormatoArquivos>;

const arquivoAudio: ArquivoAudio = 'mp4';

console.log(arquivoAudio);