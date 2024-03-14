import React from "react";
import './front.css';

import Dog1 from "../images/dog1.jpg"
import Dog2 from "../images/dog2.jpg"
import Dog3 from "../images/dog3.jpg"
import Dog4 from "../images/dog4.jpg"

import Cat1 from "../images/cat1.jpg"
import Cat2 from "../images/cat2.jpg"
import Cat3 from "../images/cat3.jpg"
import Cat4 from "../images/cat4.jpg"

function Page(){
  function display(){
    alert(`Adoption request sent`);
  }
    return(
        <div className="parent" >
            <h1 className="head">Petstopia</h1>
            <div className="child">
                <div>
                    <p className="para">
                    Hi there , your ultimate destination for all things pets!
                    Whether you're a seasoned pet owner or considering bringing a furry friend into your home for the first time, 
                    our website is designed to be your go-to resource for everything related to pet care, health, training, and much more.</p>
                 </div>
                 <hr></hr>
                <h1>Our Pets</h1>
               <div class="container">
              <div class="pet">
              <h1 className="head">See All Pets</h1>
               <h2 className="class">Dogs Section</h2>
                <div className="flex">
                <div className="cont"> 
                <img src={Dog1} alt="Dog"/>
                <p className="para"> Name:Shelby<br></br>Price:Rs.2000<br></br>Shop:paws</p>
                <button type="submit" onClick={display} >Adopt Now</button>
                </div>
                <div className="cont">
                <img src={Dog2} alt="Dog" />
                <p className="para"> Name:Timmy<br></br>Price:Rs.1500<br></br>Shop:paws</p>
                <button type="submit" onClick={display}>Adopt Now</button>
                </div>
                <div className="cont">
                <img src={Dog3} alt="Dog"/>
                <p className="para"> Name:Bruno<br></br>Price:Rs.3000<br></br>Shop:DogsWorld</p>
                <button type="submit" onClick={display} >Adopt Now</button>
                </div>
                <div className="cont">
                <img src={Dog4} alt="Dog"/>  
                <p className="para"> Name:Cyrus<br></br>Price:Rs.5000<br></br>Shop:DogsWorld</p>   
                <button type="submit"onClick={display} >Adopt Now</button>
                </div>           
              </div>
            </div>
            <div class="pet">
            <h2 className="class">Cats Section</h2>
            <div className="flex">
            <div className="cont">
            <img src={Cat1} alt="Cat"/>
            <p className="para"> Name:Johnny<br></br>Price:Rs.100<br></br>Shop:Felines</p>
            <button type="submit" onClick={display} >Adopt Now</button> 
            </div>
            <div className="cont">
            <img src={Cat2} alt="Cat"/>
            <p className="para"> Name:Kitty<br></br>Price:Rs.1800<br></br>Shop:CatsNursery</p> 
            <button type="submit" onClick={display}>Adopt Now</button>
            </div>
            <div className="cont">
            <img src={Cat3} alt="Cat"/>
            <p className="para"> Name:Lucky<br></br>Price:Rs.2000<br></br>Shop:Felines</p> 
            <button type="submit" onClick={display} >Adopt Now</button>
            </div>
            <div className="cont">
            <img src={Cat4} alt="Cat"/>
            <p className="para"> Name:Fluffy<br></br>Price:Rs.5000<br></br>Shop:CatsNursery</p> 
            <button type="submit" onClick={display}>Adopt Now</button>
            </div>
            </div>
            <center>
            <h3 className="imp">Login to Adopt !!!</h3></center>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Page;