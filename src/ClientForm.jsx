import React,{Component} from 'react'

class ClientForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
             // mon nouveau client que je vais ajouter dans mes clients
      monnouveau:""
        }
    }

 // Ma fonction qui permet de gerer mon changement

 handleChange=(event)=>{
    const val = event.currentTarget.value;
    this.setState({
      monnouveau:val
    })
      }

/* la fonction qui gere la soumission  de mon formulaire
  Quand on gere une soummission en js il faut faire un preventDefault sur l'evenement pour eviter que la page se recharge
  */
 handleSubmit=(event)=>{
    event.preventDefault();
// On creé l'id  à parir d'une date (c'est le moment auquel j'ai cliqué sur le bouton confirmer)
const id= new Date().getTime();
const nom = this.state.monnouveau

// on créé un nouveau objet client pour l'inserer dans mon tableau d'objet de client
const client={id,nom};
/*const client={ 
  id:id,
  nom:nom
};
*/
this.props.onClientAdd({id,nom});
this.setState({
    monnouveau:""
})

  }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input value={this.state.monnouveau} onChange={this.handleChange} type="text" placeholder="saisir le nouveau client à inserer"/>
            <button>Confirmer</button>
            </form> 
        );
    }
}
export default ClientForm;