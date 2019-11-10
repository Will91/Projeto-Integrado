import { React, Fragment } from 'react';
import './App.css';

//Teste component paginas das compras
//Objetivo: Criar um component dinamico para que ele possa trazer as imagens, descrições e preços dos objetos que
//Selecionado.
function App() {
  return (
    <div>
    <div className="App">
      <div className="header-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    
                </div>
        
    
    
    
    <div className="product-big-title-area">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="product-bit-title text-center">
                        <h2>Todos os Produtos com Desconto</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    <div className="single-product-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    
                </div>
                
            <div className="row">
                <div className="col-md-12">
                    <div className="product-pagination text-center">
                        <nav>
                          <ul className="pagination">
                            <li>
                              <a href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                              </a>
                            </li>
                            <li><a href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#">4</a></li>
                            <li><a href="#">5</a></li>
                            <li>
                              <a href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                              </a>
                            </li>
                          </ul>
                        </nav>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>


    <div className="footer-top-area">
        <div className="zigzag-bottom"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                                       
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    <div className="footer-menu">
                                             
                    </div>
                </div>
                
                <div className="col-md-3 col-sm-6">
                    
                </div> 
    </div>    
    </div> 
    </div>       
    
    
</div>
  );
}

export default App;
