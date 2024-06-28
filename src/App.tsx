import React, {FC} from 'react';
import './App.css';
import {dexters} from "./data";
import {ICharacter} from "./models/ICharacter";
import Character from "./component/character";



const App: FC = () => {
  return (
      <div>
          {
              dexters.map((character:ICharacter)=>
              <Character character={character}>
                  {character.info}
                  </Character>
          )
          }
      </div>
  );
}

export default App;
