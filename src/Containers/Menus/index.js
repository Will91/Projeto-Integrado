import { React } from 'react';

export const menuTop = () =>{
    return(
        <div className="user-menu">
            <ul>
                <li><a href="#"><i className="fa fa-user"></i> Minha Conta</a></li>
                <li><a href="#"><i className="fa fa-heart"></i> Preferidos</a></li>
                <li><a href="#"><i className="fa fa-user"></i> Carrinho</a></li>
                <li><a href="#"><i className="fa fa-user"></i> Login</a></li>
            </ul>
        </div>
    );
}

export const menuPrincipal = () => {
    return (
        <div className="mainmenu-area">
        <div className="container">
            <div className="row">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div> 
                <div className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="index.html">Home</a></li>
                        <li className="active"><a href="shop.html">Moda Infantil</a></li>
                        <li><a href="single-product.html">Moda Feminina</a></li>
                        <li><a href="checkout.html">Moda Masculina</a></li>
                        <li><a href="#">Semi Joias</a></li>
                        <li><a href="#">Carrinho</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>  
            </div>
        </div>
    </div> 
    );
}

export const carrinhoMenu = () => {
    return (
        <div className="col-sm-6">
            <div className="shopping-item">
                <a href="#">Carrinho - <span className="cart-amunt">R$0,00</span> <i className="fa fa-shopping-cart"></i> <span className="product-count">0</span></a>
            </div>
        </div>
    );
}

export const bannerPrincipal = () => {
    return (
        <div className="site-branding-area">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <div className="logo">
                        <h1><a href="./"><img src="img/logo.png"/></a></h1>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    );
}

export const menuNavegacaoFooter = () => {
    return (
        <div>
            <h2 className="footer-wid-title">Menu de Navegação </h2>
                <ul>
                    <li><a href="#">Minha Conta</a></li>
                    <li><a href="#">Historico de Compras</a></li>
                    <li><a href="#">Minha Lista</a></li>
                    <li><a href="#">Carrinho</a></li>
                </ul>
        </div>       
    );
}

export const menuCategoriasFooter = () => {
    return(
        <div>
            <h2 className="footer-wid-title">Categorias</h2>
                <ul>
                    <li><a href="#">Moda Infantil</a></li>
                    <li><a href="#">Moda Masculina</a></li>
                    <li><a href="#">Moda Feminina</a></li>
                    <li><a href="#">Semi Joias</a></li>
                </ul>   
        </div>    
    );
}

export const sobreNosFooter = () =>{
    return (
        <div className="footer-about-us">
            <h2>Black<span>Hawk</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis sunt id doloribus vero quam laborum quas alias dolores blanditiis iusto consequatur, modi aliquid eveniet eligendi iure eaque ipsam iste, pariatur omnis sint! Suscipit, debitis, quisquam. Laborum commodi veritatis magni at?</p>
            <div className="footer-social">
                <a href="#" target="_blank"><i className="fa fa-facebook"></i></a>
                <a href="#" target="_blank"><i className="fa fa-twitter"></i></a>
                <a href="#" target="_blank"><i className="fa fa-youtube"></i></a>
                <a href="#" target="_blank"><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
    );
}

export const emailMenuFooter = () =>{
    return (
        <div className="footer-newsletter">
            <h2 className="footer-wid-title">Newsletter</h2>
            <p>Insira seu email para receber as nossas novidades.</p>
                <div className="newsletter-form">
                    <form action="#">
                        <input type="email" placeholder="Insira seu email"/>
                        <input type="submit" value="Enviar"/>
                    </form>
                </div>
        </div>
    );
}
