import { React } from 'react';

class carrinho extends React.Component {
    render(){
        return(
            <div className="single-shop-product">
                <div className="product-upper">
                    <img src="img/product-2.jpg" alt=""/>
                </div>
                <h2><a href="">Kit Mijão</a></h2>
                <div className="product-carousel-price">
                    <ins>R$899.00</ins> <del>R$999.00</del>
                </div>  
                
                <div className="product-option-shop">
                    <a onclick="adicionarCarrinho(1);" className="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_value="70" rel="nofollow">Adicionar ao Carrinho</a>
                </div>                       
            </div>
        );
    }
}

export default carrinho;