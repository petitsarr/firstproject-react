import React,{Component} from 'react'
class Client extends React.Component{



    render(){
        /*
        const details= this.props.details;
        const onDelete=this.props.onDelete;
        */
       const{details,onDelete}=this.props;
       
        return(

            <li>{details.nom} <button onClick={()=>{
                onDelete(details.id)
              }} >supprimer</button></li>

        );
    }
}
export default Client;
