
export  const GetCartData = (dispatch)=>{

    // return(dispatch,getState)=>{
       async function GetData(){
        let res = await fetch('https://cartikkg-shop-dress-up-new.onrender.com/cart');
        let data= await res.json();
    
        dispatch({
            type:"GETCARTDATA",
            payload:data
        })

       }
       GetData()
}
export  const GetPatchData = async (Data,id,dispatch)=>{
    await fetch(`https://cartikkg-shop-dress-up-new.onrender.com/cart/${id}`,{
      method:"PATCH",
      body: JSON.stringify(Data),
      headers :{
      "Content-Type":"application/json",
      },   
     });
 

}
export const GetDeleteData = async (id,index,Array,dispatch)=>{
      
      let temp=[]
      Array.splice(index,1);
 
         temp=[...Array]
     
         dispatch({
             type:"GETCARTDATA",
             payload:temp
      })
      await fetch(`https://cartikkg-shop-dress-up-new.onrender.com/cart/${id}`,{
         method:'DELETE'
      });
      
      
      
}     
