import React from 'react';
import logo from './logo.svg';
import './App.css';
import Client from './Client';
import ClientForm from './ClientForm'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state=
    {
      // mon tableau d'objets de clients
      clients:[
        {id:1,nom:"cherifou"},
        {id:2,nom:"moussa"},
        {id:3, nom:"thierno"},
        {id:4, nom:"Kanouté"}
      ]
     
    };

  }
  // j'utilise la fonction fléché ici pour garder le bon this,je pouvais utiliser bind
  // elle recoit en parametre l'identifiant du client à supprimer
   handleDelete=(id)=>{
  //je crée une copie de mon tableau 
  // la methode slice permet de crée une copie de mon tableau
  const clients= this.state.clients.slice();
  
  /* la methode findIndex() permet de trouver la position d'un élément particulier dans un tableau elle  recoit 
en paramétre une fonction en callback et cette fonction recoit en paramétre  chaque client qui se trouve dans le tableau
des clients. la fonction de callback demande si ce client est celui que l'on cherche
*/
const index= clients.findIndex((clients)=>{
  return clients.id===id
})

// la methode splice() permet de retirer des éléments à partir d'un index donné dans un tableau
// ceci veut dire qu'on va supprimer 1 élément en partant de l'index index.
clients.splice(index,1);

// Mis a jour de mon state
this.setState({
  clients:clients
}
  
)

  }


  // cet fonction permet de gerer l'ajout d'un client
  handleAdd =(client)=>{
    // on crée une copie de mon tableau avec slice
const clients= this.state.clients.slice();
// Ajout de mon nouveau client dans le tableau que j'ai crée
clients.push(client);
// mis a jour de mon state pour afficher ts mes clients
this.setState({
  clients:clients
 
  
})
  }

  
  render(){
    // dans ma fonction render this correspond a mon composant app
    
    const mesclients= this.state.clients.map((clients)=>{
      return (
       <Client details= {clients} onDelete={this.handleDelete}  />
        )
    })

    return(
      <div>
      
      <h1>MA LISTE DE CLIENTS</h1>
      <ul>
      {mesclients} 
      </ul>
      <ClientForm onClientAdd={this.handleAdd}  />
      

      </div>
      
      

    );
  }
}
export default App;
