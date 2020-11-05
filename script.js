const button = document.querySelector('.btn');
let list = [];
button.addEventListener('click', ()=>{
    const inputValue = document.querySelector('.inp').value;
    localStorage.setItem('val', `${inputValue}`);
    document.querySelector('.inp').value = '';
    async function fetchUsers(){
    const res = await fetch('https://reqres.in/api/users');
    const allData = await res.json();
    const data = await allData.data;
    for(users of data){
        const emails = users.email;
        const firstNames = users.first_name
        list.push(emails, firstNames)
        let currentName = localStorage.getItem('val');
        let arrayContains = (list.indexOf(`${currentName}`) > -1);  
        if(arrayContains === true){
           console.log(list.indexOf(`${currentName}`))
           let indx = list.indexOf(`${currentName}`) - 1;
           document.querySelector('.email').innerHTML = list[indx]
           document.querySelector('.email').style.color = 'green'
        }else{
            document.querySelector('.email').innerHTML = 'invalid User...'
            document.querySelector('.email').style.color = '#ec0101'
        }
    } 
    }
    fetchUsers();
})

