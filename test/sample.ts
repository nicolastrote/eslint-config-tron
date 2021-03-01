import { IPerson, SampleData } from './sampleTypes';

const sum = (a: number, b: number): number => a + b;

sum(1, 2);

const greeter = (person: IPerson): string =>
  `My name is ${person.name}. I am ${person.age} years old.`;

greeter({ name: 'tron', age: 21 });

const greeterWithEnum = (name: SampleData, age: SampleData): string =>
  `My name is ${name}. I am ${age} years old.`;

greeterWithEnum(SampleData.name, SampleData.age);
