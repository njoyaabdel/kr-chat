import Logo from './component/Logo.png'
import { useState } from 'react';
import './App.css';
import FormInput from './component/FormInput';
import Youtubeform from './component/youtubeform';

function App() {
  return (
    <div className="main-container">
      <div class="block1">
          <div className="container-left">
            <div className="box-container-1">
            <img src={Logo} alt=" "></img>
            <h2>BIENVENUE SUR KR CHAT</h2>
            <div className="barre"></div>
            <p className="para">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
          </div>
            <div className="box-container-2">
              <div className="footer">J’ai déjà un compte sur KR chat</div>
              <button>Se connecter</button> 
            </div>
      </div>
      </div>
    <FormInput />
    
    </div>
  );
}

export default App;
