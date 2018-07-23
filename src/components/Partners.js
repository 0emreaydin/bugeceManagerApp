import React from 'react';

export const Partners = () => (
    <div>
        <nav className="navbar navbar-default">
            <a className="navbar-brand" href="#">BUGECE</a>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="aboutUs.html">HAKKIMIZDA</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="whyBugeceManager.html">NEDEN BU GECE?</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="report.html">RAPORLAMA</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="contact.html">BİZE ULAŞIN</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="partners.html">PARTNERLERİMİZ</a>
            </li>
            <li className="btn btn-primary">BİRLİKTE ÇALIŞALIM</li>
            <li className="btn btn-warning">GİRİŞ YAP</li>
            </ul>
        </nav>
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="display-3 why-title">PARTNERLERİMİZ</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3"><img src="img/doge.png" style={{width:'50px', height:'50px'}}/></div>
                <div className="col-sm-3"><img src="img/doge.png" style={{width:'50px', height:'50px'}} /></div>
                <div className="col-sm-3"><img src="img/doge.png"  style={{width:'50px', height:'50px'}}/></div>
                <div className="col-sm-3"><img src="img/doge.png" style={{width:'50px', height:'50px'}}/></div>
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