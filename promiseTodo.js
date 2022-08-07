const fetchApi = (url) =>{
    return fetch(url)
      .then((res) => res.json())
      .then((result) => {
       return result
      });
  }

  const fetchTodo1 = async () => {
    const url = " https://jsonplaceholder.typicode.com/todos/1";
    const data = fetchApi(url)
    return data
   };

   //Q1-Q2
  const promise1 = new Promise((resolve, reject) => {
    const todo1 = fetchTodo1()
    resolve(todo1)
  })

   const fetchTodo2 = async () => {
    const url = "https://jsonplaceholder.typicode.com/todos/2";
    const data = fetchApi(url)
    return data
   };

  const promise2 = new Promise((resolve, reject) => {
    const todo2 = fetchTodo2()
    resolve(todo2)
  });

  const getPromise = () =>{
    promise2.then(value=> console.log(value))
  }

  const fetchAllData = ()=>{
    Promise.all([promise1, promise2]).then(value=>console.log(value))
  }

  const fetchTodos = async () =>{
    const url = " https://jsonplaceholder.typicode.com/todos";
    const data = fetchApi(url)
    return data
  }
//Q3
  const promise3 = new Promise((resolve, reject) =>{
    const data = fetchTodos()
    resolve(data)
  })

  const get20Todo = () =>{
    promise3.then(values=>{
      const filteredValues = values.filter((item, indx) => indx  <20 && item.completed)
                                   .map(ele => ele.title)
      console.log('filteredValues', filteredValues);
    }).catch(err=> console.error(err))
  }

 const todos = get20Todo()
 
