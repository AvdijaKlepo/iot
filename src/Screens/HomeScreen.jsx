import { onValue, ref } from 'firebase/database'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../FireBase/Firebase'
import heater from '../Material/heater.jpg'
import '../Styles/HomeScreenStyle.css'

const HomeScreen = () => {
  const [sparina, setSparina] = useState(0);
  const divs=document.getElementsByClassName("bar")
  const thisBody= document.querySelector("body");

  function startHeater() {
    thisBody.style="background-color:white;"
      switch(sparina){
        case(0): 
        for(const div of divs){
          if(div.style.backgroundColor!=="white"){
            div.style ="transition:background-color 5s;background-color:white";
          }
        }
          break;
        case(1): 
        divs[0].style="transition:background-color 5s;background-color:orange;"
        divs[1].style="transition:background-color 5s;background-color:white;"
        divs[2].style="transition:background-color 5s;background-color:white;"
        divs[3].style="transition:background-color 5s;background-color:white;"
        divs[4].style="transition:background-color 5s;background-color:white;"
          break;
        case(2): 
        divs[1].style="transition:background-color 5s;background-color:orange;"
        divs[2].style="transition:background-color 5s;background-color:white;"
        divs[3].style="transition:background-color 5s;background-color:white;"
        divs[4].style="transition:background-color 5s;background-color:white;"
          break;
        case(3):
        divs[2].style="transition:background-color 5s;background-color:orange;"
        divs[3].style="transition:background-color 5s;background-color:white;"
        divs[4].style="transition:background-color 5s;background-color:white;"
            break;
        case(4):
        divs[3].style="transition:background-color 5s;background-color:orange;"
        divs[4].style="transition:background-color 5s;background-color:white;"
          break;
        case(5):
        divs[4].style="transition:background-color 5s;background-color:orange;"
          break;
        default:
          break;
      }
  }

  useEffect(() => {
    onValue(ref(db), snapshot => {
      const data = snapshot.val();
      setSparina(data.sparina); 
    });
  }, []);
  startHeater();
  return (
    <>
        <div className='heatercontainer'>
          
          <div id='firstBar' className="bar">.</div>
          <div id='secondBar' className="bar">.</div>
          <div id='thirdBar' className="bar">.</div>
          <div id='fourthBar' className="bar">.</div>
          <div id='fifthBar' className="bar">.</div>
          
          <img id='heater' src={heater} alt=""  style={{width: '500px'}}/>
       </div>
    </>
  )
}

export default HomeScreen