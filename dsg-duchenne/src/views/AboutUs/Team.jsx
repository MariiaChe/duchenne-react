import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import './Team.css'


class Team extends Component{

    render(){
        return(
           <React.Fragment>
                
                    <Navbar/>
                  
                    <div  id="team">
                    <div className="row">
                   <div className=" body offset-md-1 col-md-8">
              
               <h1> Nuestro Equipo </h1>  
               <div className="directory">
               <h4>La principal característica de este equipo es su compromiso , para luchar juntos para la cura de duchenne. Este equipo altamente comprometido esta formado por nuestro directorio el cual se compone por los siguientes miembros:</h4> 
               </div>
                <h4 id="header">Directorio :</h4>
                 <li className="list">Nicolas Schongut Grollmus | Fundador y Presidente</li>
                <li className="list">Alejandro Duran | Fundador</li>
                <li className="list"> Gabriel Rada | Director </li>
                <li className="list">Mauricio Garro Munizaga | Secretario</li>
              <li className="list">Fabiola | Tesorera</li>
                
              </div>
                </div>
                </div>
                   <Footer/>
    </React.Fragment>

        )
    }

}
export default Team