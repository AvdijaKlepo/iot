import { onValue, ref, set } from "firebase/database";
import { useEffect, useState } from "react"
import { db } from "../FireBase/Firebase"
import '../Styles/ControllerScreenStyle.css'
import power from '../Material/power.jpg'


const ControllerScreen = () => {
  const [sparina, setSparina] = useState(0);

  useEffect(() => {
   onValue(ref(db), snapshot => {
    const data = snapshot.val();
    setSparina(data.sparina);
   });
  }, []);

  const pojacaj = () => {
    sparina < 5 && sparina > 0 && set(ref(db, '/sparina'), sparina + 1);
  }

  const smanji = () => {
    sparina > 1 && set(ref(db, '/sparina'), sparina - 1);
  }

  const on = () => {
    sparina === 0 && set(ref(db, '/sparina'), 1) || sparina>0 && set(ref(db,'/sparina'),0);
  }

 

  return (
    
    <div className="upravljac">
    
      
      <div className="grid">
      <div className="jacinacontainer">
        <h1 id="sparina">{sparina}</h1>
      </div>
      <div className="btnContainer1">
        <button onClick={on} className="btn"><img id='power' src={power} alt=""></img></button>
        
      </div>
      </div>
      <br /><br />
      <div className="btnContainer2">
        <button onClick={pojacaj} className="btn2" id="btnup">+</button>
        <button onClick={smanji} className="btn2" id="btndwn">-</button>
      </div>
    

    </div>
    
  )
}

export default ControllerScreen