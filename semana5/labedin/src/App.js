import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import MinhaImagem from './components/CardGrande/face.png';
import ImagemFitesa from './components/CardGrande/fitesa.png';
import ImagemNT from './components/CardGrande/ntsolar.png';
import ImagemEmant from './components/CardGrande/emant.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={MinhaImagem}
          nome="Gabriel Musse" 
          descricao="Me chamo Gabriel Musse, sou Engenheiro Mecânico formado pela
          Pontifícia Universidade Católica do Rio Grande do Sul e estou mudando
          para a área da computação. Atualmente fazendo o curso Full Stack Web Developer
          da Labenu."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Entre em contato</h2>
        <CardPequeno 
          imagem="https://www.innovat.com.br/wp-content/uploads/2017/04/email-icon-23.png"
          titulo="E-mail: " 
          texto="gdmusse@hotmail.com" 
        />   

        <CardPequeno 
          imagem="https://i.pinimg.com/originals/4e/dc/b4/4edcb460a940ff726549077935f57168.jpg"
          titulo="Endereço:" 
          texto="Rua Inexistente 123, Bairro Não existe, Porto Alegre, RS" 
        />   
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={ImagemFitesa}
          nome="Fitesa NãoTecidos S.A" 
          descricao="Estagiário de Engenharia de Processos" 
        />
        
        <CardGrande 
          imagem={ImagemNT}
          nome="Núcleo de Tecnologia em Energia Solar" 
          descricao="Bolsista CNPQ" 
        />

        <CardGrande 
          imagem={ImagemEmant}
          nome="Emant" 
          descricao="Estagiário do Comercial" 
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />     
      </div>

   


      
    </div>
  );
}

export default App;
