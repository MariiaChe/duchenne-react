import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

import {Link } from 'react-router-dom';
import './otrasInvestigaciones.css'


class OtrasInvestigaciones extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                    <div id="othinv">
                        <div className="row">
                            <div className="card col-md-3 col-10 offset-1" >
                            <div className="card-body">
                            <img  src="http://1.bp.blogspot.com/-eEgfS4IybQY/VltbCXtZVzI/AAAAAAAAAG4/Cv07YdgxSho/s1600/33.jpg" className="card-img-top" alt="imagen sobre microdistrofina"/>
                            <div className="text-card">
                                        <h5 className="card-title">MICRO-DISTROFINA</h5> 
                                        <div className="text">
                                        <a className="card-text">Un gen miniaturizado intenta salvar a los niños</a></div>
                                        <Link to="/investigacion-microdistrofina"><a href="#" className="card-link">Articulo completo</a></Link> 
                                    </div>
                            </div></div>
                            <div className=" card col-md-3 col-10 offset-1" >
                                <div className="card-body">
                                <img  src="https://weekly.biotechprimer.com/wp-content/uploads/2015/09/Exon-Skipping-Technology.jpg" className="card-img-top" alt="imagen sobre exon skipping"/>
                                    <h5 className="card-title">Exón skipping</h5>
                                    <div className="text">
                                    <a className="card-text">Nueva estrategia farmacologica para la distrofia muscular de Duchenne.</a>
                                    </div>
                                    <Link to="/investigacion-exon"><a href="#" className="card-link">Articulo completo</a></Link>
                                </div>
                            </div>
                            <div className="card col-md-3 col-10 offset-1" >
                                <div className="card-body">
                                <img  src="http://www.yachachiq.net/images/crispr-e1533660585287.jpeg" className="card-img-top" alt="imagen sobre tratamiento crispr"/>
                                    <h5 className="card-title">Tratamiento CRISPR / Cas9</h5>
                                    <div className="text">
                                    <a className="card-text">Tecnología médica nueva .Se basa en el sistema natural de las bacterias para  protegerse de las infecciones virales.</a>
                                    </div> <Link to="/CRISPR"> <a href="#" className="card-link">Articulo completo</a></Link>   
                                </div>
                            </div>
                        </div>                   
                    </div>    
                <Footer/>
           
            </React.Fragment>
        )
    }
}
export default OtrasInvestigaciones