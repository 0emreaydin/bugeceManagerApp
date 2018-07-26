import React from 'react';
import ContactForm from './ContactForm';

const Partners = () => (
    <div>
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
            <div className="modal fade" id="myModal" role="dialog">
                <ContactForm/>
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
                <a href="https://bugece.co">BUGECE.co</a>
            </div>
        </footer>
    </div>
);

export default Partners;