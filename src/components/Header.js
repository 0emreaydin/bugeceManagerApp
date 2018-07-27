import React from 'react';

export const Header = () => (
    <nav className="navbar navbar-inverse navbar-fixed-top"  style={{width:'100%'}}>
     <div className="container-fluid"  style={{paddingRight:'0'}}>
      <div className="navbar-header"  style={{marginRight:'0'}}>
       <button type="button" className="navbar-toggle" id="dlDropDown" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
       </button>
       <a className="navbar-brand" href="https://bugece.co/">BUGECE</a>
      </div>
      <div>
       <div className="collapse navbar-collapse" id="myNavbar">
        <ul className="nav navbar-nav ml-auto">
         <li><a href="#section1">HAKKIMIZDA</a></li>
         <li><a href="#section2">NEDEN BUGECE?</a></li>
         <li><a href="#section3">RAPORLAMA</a></li>
         <li><a href="#section4">BİZE ULAŞIN</a></li>
         <li><a href="#section5">PARTNERLERİMİZ</a></li>
         <li className="btn btn-primary contact-button" data-toggle="modal" data-target="#myModal">BİRLİKTE ÇALIŞALIM</li>
         <li className="btn btn-warning" onClick={() => window.location = 'http://manager.bugece.co/login'} style={{color: '#fff', backgroundColor:'#f0c713'}}>GİRİŞ YAP</li>
        </ul>
       </div>
      </div>
     </div>
    </nav>
);