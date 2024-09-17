

console.log("not  taking tym")

setTimeout(() => {
    console.log('taking  Tym')
}, 0);

console.log("not  taking tym")



//function   to  fetch  users   will  take  tym  make  it  asynchronous
function  gerUsersFromInternet()
{


    //code
    //call  server
    //prepare  data

    let   users  =  [
        {
            name: "peter"
        },
        {
            name:  "mumo"
        }
    ]
}

console.log("not  async")

setTimeout(() => {
    console.log( "async  function")
    gerUsersFromInternet();

}, 0);



//promises
//a  better   way   of    handling  async  task
//promise   an  object   with  executor   function     resolves  or  rejects


async function  getUsersFromFacebok()
{

 const  prom = new Promise( function( resolve  ,  reject){

    let   users =   [
        {
            name:  "elon"
        }
    ]

    if (users.length > 0)
    {
        resolve({
            Success:  "Data  Fetching  Successful"
        })
    }
    else  {
        reject(
            {
                message:  "some  error   while  fetching  data "
            }
        )
    }
 })

 //promises  are   not    by  default  async

 console.log( "promises")
 return prom;

}

getUsersFromFacebok()

.then( (  data)=>{
    console.log(  data)
})
.catch(  (err)=>{
    console.log(  err)
})

