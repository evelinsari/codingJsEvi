/*type User = {
  username: string;
  password: string;
  id: number;
  number: number;
  balance: number;
  isActive: boolean;
};

let user: User[] = [
  {
    username: "Joe",
    password: "Abc123",
    id: 12345,
    number: 7894,
    balance: 85,
    isActive: true,
  },

  {
    username: "Jane",
    password: "Bbc123",
    id: 67894,
    number: 7777,
    balance: 185,
    isActive: true,
  },
  {
    username: "Sam",
    password: "Cbc123",
    id: 1887,
    number: 7444,
    balance: 85,
    isActive: false,
  },
];

function getUsers(user: User[]): string[] {
  let userList: string[] = [];

  let index = 0;

  while (user[index] !== undefined) {
    let id = user[index].username + "#" + user[index].id;
    userList = [...userList, id];
    index += 1;
  }

  return userList;
}

let userRes: string[] = getUsers(user);
console.log(userRes);*/


type BankAccount = {
    number: number;
    balance: number;
    isActive: boolean;
  };
  
  let user: BankAccount [] = [
    {
      number: 7894,
      balance: 85,
      isActive: true,
    },
    {
      number: 7777,
      balance: 185,
      isActive: true,
    },
    {
      number: 7444,
      balance: 85,
      isActive: false,
    },
  ];

  function getAccount(account: BankAccount[]): number[] {
    let accountList: number[] = [];
  
    let index = 0;
  
    while (user[index] !== undefined) {
      let balance=  user[index].balance;
      accountList = [...accountList, balance];
      index += 1;
    }
  
    return accountList;
  }
  
  let accountRes: number[] = getAccount(user);
  console.log(accountRes);



  function convert<InputType, OutputType> (arr: InputType[], createValue: (elem: InputType) => OutputType): OutputType[] {
    let result: OutputType[] = []
  
    let index = 0
    while (arr[index] !== undefined) {
      let element = arr[index]
      
        result = [ ...result, createValue(element)]
      
      index += 1
    }
  
    return result
  }