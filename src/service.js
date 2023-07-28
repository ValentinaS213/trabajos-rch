const data = require("./MOCK_DATA.json");

module.exports ={
    //get all users
    getUsers: () => data,
    //get one user by ID
    getUser: (id) => {
        let idf = Number (id);
        let user = data.filter ((person)=> person.id === idf)[0];
        return user; 
    },
     createUser:(dataUser)=>{
        let newUser = {
            id: data.length +1,
            ...dataUser
        }
        data.push(newUser);
        return newUser;
      }
}
