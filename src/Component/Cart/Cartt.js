import store from "../../Store/Store"
import { GetCartData,GetPatchData,GetDeleteData } from '../../Actions/CartAction';
export default function CARTMENU (){
    console.log("sgsd   ")
    
    if(document.getElementById("CARTDI")){
        document.getElementById("CARTDI").id="CARTDIV"
    }else{
        document.getElementById("CARTDIV").id="CARTDI"
    }
    
}
export const DecreaseQTY=(id,dispatch)=>{
    let temp=[]
    let Array=store.getState().ShopDressReducer.Cart;
    console.log("ok-des");
    Array.map((el)=>{
        if(el.id==id){
           if(el.Qty>1){
             el.Qty= Number(el.Qty)-1;
           }else{
             GetDeleteData(id);
           }
           GetPatchData(el,id);
         
        }
    })
    temp=[...Array]
    dispatch({
        type:"GETCARTDATA",
        payload:temp
    })
    // GetCartData(dispatch)
    // console.log(Array);


    
}



export const IncreaseQTY=(id,dispatch, Array)=>{
    let temp=[]
     Array.map((el)=>{
        if(el.id==id){
            
            el.Qty= Number(el.Qty)+1;
            
            
            GetPatchData(el,id);
        }
     })

        temp=[...Array]
    
        dispatch({
            type:"GETCARTDATA",
            payload:temp
        })
        
        // console.log(store.getState().ShopDressReducer.Cart[0].Qty);

}