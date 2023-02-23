import React from "react";
import { useNavigate } from "react-router-dom";
import Mapping from "../../img/Maping.png";


const Chapter2 = () => {
const navigate = useNavigate();


  return (
    <div>
      <div className="bg-[#A8DADC]   text-white p-5 m-0 md:mt-4">
        <h1 className="text-2xl screen max-w-screen-xl mx-auto font-bold">
          Chapter 2: What is the UK?
        </h1>
      </div>
      <div className="chapter_2 min-h-screen max-w-screen-lg mx-auto p-10">
          <p>
          Chapter 2 covers the different nations that make up the United Kingdom and the <br /> terms that are used to describe the islands and its people, providing a map  brshowing the location of the <br />
          different nations that comprise the UK. Additionally, <br /> this Chapter gives an explanation of what ‘Crown Dependencies’ and ‘British overseas territories’ <br /> are.

          The UK is made up of England, Scotland, Wales and Northern Ireland. <br /> The rest of Ireland is an independent country.

          <img src={Mapping} alt="for Map " className="p-10" /> <br />

    <p>
          The official name of the country is the United Kingdom of Great Britain and Northern Ireland. ‘Great Britain’ refers only to England, Scotland and Wales, not to Northern Ireland. The words ‘Britain’, ‘British Isles’ or ‘British’, however, are used here to refer to everyone in the UK.

          There are also several islands which are closely linked with the UK but are not part of it: the Channel Islands and the Isle of Man. These have their own governments and are called ‘Crown dependencies’. There are also several British overseas territories in other parts of the world, such as St Helena and the Falkland Islands. They are also linked to the UK but are not part of it.

          The UK is governed by the parliament sitting in Westminster. Scotland, Wales and Northern Ireland also have parliaments or assemblies of their own, with devolved powers in defined areas.
      </p> <br /> <br />
  <h1 className="text-2xl">Check that you understand</h1>  <br />  
         <p>The different countries that make up the UK</p>
          </p> <br />

          <button className="text-2xl bg-orange-200 p-3  ml-20" onClick={() =>{
          navigate("/a-long-and-illustrious-history")
          }}>Go To The Chapter-3</button>


      </div>
    </div>
  );
};

export default Chapter2;
