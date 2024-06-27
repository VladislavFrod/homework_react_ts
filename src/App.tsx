import React, {FC} from 'react';
import './App.css';
import CustomButton from "./component/CustomButton";
import './component/header-style.css';
import Persons from "./component/Persons";

const App: FC = () => {
  return (
      <>
    <main>
        <Persons
            image={'https://upload.wikimedia.org/wikipedia/ru/thumb/8/82/Dexter.jpg/411px-Dexter.jpg'}
            lastName={'Dexter'}
                 surName={'Morgan'}
                 age={30}
                 ></Persons>
        <Persons lastName={'Debra'}
                 surName={'Morgan'}
                 age={28}
                 image={'https://upload.wikimedia.org/wikipedia/commons/f/fb/Jennifer_Carpenter_2010.jpg'}
        ></Persons>
        <Persons lastName={'Vince'}
                 surName={'Masuka'}
                 age={30}
                 image={'https://upload.wikimedia.org/wikipedia/en/8/8f/Vince_Masuka.jpg'}
        ></Persons>
    </main>
      </>
  );
}

export default App;
