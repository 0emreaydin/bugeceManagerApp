import React from 'react';
import { Link } from 'react-router-dom';

const Partners = () => (
    <div>
        <nav className="navbar navbar-default">
            <a className="navbar-brand" href="">BUGECE</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons"  to='/'>HAKKIMIZDA</Link>
            </li>
            <li className="nav-item">
                <Link to='/info' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >NEDEN BU GECE?</Link>
            </li>
            <li className="nav-item">
                <Link to='/report' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >RAPORLAMA</Link>
            </li>
            <li className="nav-item">
                <Link to='/contact' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >BİZE ULAŞIN</Link>
            </li>
            <li className="nav-item">
                <Link to='/partners' style={{transform:'translateY(30%)'}} className="nav-link nav-link-buttons" >PARTNERLERİMİZ</Link>
            </li>
            <li className="btn btn-primary" style={{background:'#67afe0', borderColor: '#67afe0'}}>BİRLİKTE ÇALIŞALIM</li>
            <li className="btn btn-warning" style={{color: '#fff', backgroundColor:'#f0c713'}}>GİRİŞ YAP</li>
            </ul>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-3 why-title">PARTNERLERİMİZ</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2 partner-imgs"><img src={require('../img/Doge.png')} alt="" /></div>
                <div className="col-md-2"></div>
            </div>
            <div className="col-md-12">
                    <h1 className="partner-end">VE DAHA FAZLASI...</h1>
                </div>
        </div>
        <footer className="page-footer font-small indigo">
            <div className="container text-center text-md-left">
                <div className="row">
                    <div className="col-md-3 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                        <li>
                            <a href="#!">Very long link 1</a>
                        </li>
                        <li>
                            <a href="#!">Very long link 2</a>
                        </li>
                        <li>
                            <a href="#!">Very long link 3</a>
                        </li>
                        <li>
                            <a href="#!">Very long link 4</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                        <ul className="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-md-3 mx-auto">
                        <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
                        <ul className="list-unstyled">
                        <li>
                            <a href="#!">Link 1</a>
                        </li>
                        <li>
                            <a href="#!">Link 2</a>
                        </li>
                        <li>
                            <a href="#!">Link 3</a>
                        </li>
                        <li>
                            <a href="#!">Link 4</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
                <a href="https://mdbootstrap.com/bootstrap-tutorial/"> MDBootstrap.com</a>
            </div>
        </footer>
    </div>
);

export default Partners;