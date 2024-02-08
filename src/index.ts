const Users = [
  {
    name: 'Benjamin',
    surname: 'Turner',
    age: 24,
    married: false,
    grades: [3, 3, 4, 5, 4, 3, 5, 5],
  },
  {
    name: 'Christina',
    surname: 'Branscome',
    age: 23,
    married: true,
    grades: [4, 4, 4, 5, 5, 5, 5, 5],
  },
  {
    name: 'Willie',
    surname: 'Barrera',
    age: 22,
    married: false,
    grades: [3, 5, 5, 3, 3, 5, 4, 4],
  },
  {
    name: 'Mia',
    surname: 'White',
    age: 23,
    married: true,
    grades: [5, 5, 5, 4, 5, 5, 5, 5],
  },
  {
    name: 'Richard',
    surname: 'Hall',
    age: 23,
    married: false,
    grades: [3, 2, 4, 5, 4, 3, 3, 3],
  },
  {
    name: 'Chloe',
    surname: 'Price',
    age: 23,
    married: false,
    grades: [5, 3, 3, 3, 3, 5, 4, 3, 4],
  },
  {
    name: 'Lillian',
    surname: 'Quinn',
    age: 23,
    married: false,
    grades: [3, 4, 3, 4, 4, 4, 5, 2, 3],
  },
  {
    name: 'Jessica',
    surname: 'Buxton',
    age: 26,
    married: true,
    grades: [5, 5, 4, 5, 4, 4, 4, 4, 5, 4, 5, 4],
  },
  {
    name: 'Pamela',
    surname: 'Casillas',
    age: 24,
    married: false,
    grades: [4, 5, 4, 5, 5, 4, 3, 2, 3, 3, 3, 2],
  },
  {
    name: 'Isabella',
    surname: 'Turner',
    age: 22,
    married: true,
    grades: [5, 5, 5, 5, 5, 5, 5, 5, 4, 4, 3, 2],
  },
];

interface User {
  name: string,
  surname: string,
  age: number,
  married: boolean,
  grades: number[],
}

enum SortType {
  Name = 'name',
  Surname = 'surname',
  Age = 'age',
  Married = 'married',
  AverageGrade = 'grades',
}

type Order = 'asc' | 'desc';

function sortUser(users: User[], sortBy: SortType, order: Order): User[] {
  const arr = [...users];

  arr.sort((user1, user2) => {
    switch (sortBy) {
      case SortType.Name:
      case SortType.Surname:
        return user1[sortBy].localeCompare(user2[sortBy]);
      
      case SortType.Age:
        return user1.age - user2.age;
  
      case SortType.AverageGrade: {
        const gradesUser1 = user1.grades.reduce((acc: number, prev: number) => {
          return acc + prev;
        }, 0) / user1.grades.length;
        const gradesUser2 = user2.grades.reduce((acc: number, prev: number) => {
          return acc + prev;
        }, 0) / user2.grades.length;

        return gradesUser1 - gradesUser2;
      }

      case SortType.Married:
        return +user1.married - +user2.married;
      
      default:
        return user1.age - user2.age;
    }
  })


  return order === 'asc' ? arr : arr.reverse();
}

console.dir(sortUser(Users, SortType.Age, 'desc'))