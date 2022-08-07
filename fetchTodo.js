 
const fetchTodo1 = async () => {
    const url1 = " https://jsonplaceholder.typicode.com/todos/1";
    fetch(url1)
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
      });
   };
    
   const fetchTodo2 = async () => {
    const url1 = " https://jsonplaceholder.typicode.com/todos/2";
    fetch(url1)
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
      });
   };


   const callAll = () =>{
     fetchTodo1()
     fetchTodo2()
   }

   console.log('test', callAll());
