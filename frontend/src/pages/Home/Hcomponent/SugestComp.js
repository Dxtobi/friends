import {useState} from "react";
import { AiOutlineAudio, AiTwotoneBook } from "react-icons/ai";
import { GiFilmProjector } from "react-icons/gi";

import { connect } from 'react-redux';
import HomeHeader from "./HomeHeader";

function SugestComp({auth, menu, setMenu}) {
 // console.log(menu)

  const [active, selectActiv] = useState("Music")
    return (
        <div className="sugest-header-container">
          <HomeHeader/>
          <div className="list-of-sugest">
            <button onClick={()=>selectActiv("Music")} className={`sugest-tabs_${active==="Music"?true:false}`}><AiOutlineAudio /> Music</button>
            <button onClick={()=>selectActiv("Movies")} className={`sugest-tabs_${active==="Movies"?true:false}`}><GiFilmProjector/> Movies</button>
            <button onClick={()=>selectActiv("Books")} className={`sugest-tabs_${active === "Books" ? true : false}`} ><AiTwotoneBook /> Books</button>
        </div>
          <div className="list-items-sugest">
              <ListComp type={active}/>
          </div>
        </div>
    );
  }

  const mapStateToProps = ( state ) => ({
    auth: state.auth,
    errors: state.errors
  });

  export default connect( mapStateToProps, )( SugestComp );
  

  function ListComp({ type}) {
    const [books, SetBooks]=useState([{
        name: "Your Fully Charged Life",
        author:"Meaghan B. Murphy"
      },
      {
        name: "Authentic Happiness",
        author:"Martin E. P. Seligman, PhD"
      },{
        name: "Year of Yes",
        author:"Shonda Rhimes"
      },{
        name: "Eat, Pray, Love",
        author:"Elizabeth Gilbert"
      },{
        name: "Wild ",
        author:"Cheryl Strayed"
      },{
        name: "The Power of Positive Thinking",
        author:"Norman Vincent Peale"
      },{
        name: "The How of Happiness",
        author:"Sonja Lyubomirsky"
      },{
        name: "Hector and the Search for Happiness",
        author:"François Lelord"
      },{
        name: "The Art of Happiness",
        author:"the Dalai Lama"
      },{
        name: "Happier Human",
        author:"Unknown"
      },{
        name: "The Geography of Bliss",
        author:"Unknown"
      },{
        name: "The Happiness Project",
        author:"Gretchen Rubin"
      },{
        name: "The Gift of Presence",
        author:"Caroline Welch"
      },])


      const [movies, setMovies]=useState([
      {
        name: "I Wanna Dance with Somebody (Who Loves Me)’ by Whitney Houston",
       // author:"Martin E. P. Seligman, PhD"
      },{
        name: "Dancing Queen’ by ABBA",
       // author:"Shonda Rhimes"
      },{
        name: "Three Little Birds' by Bob Marley & The Wailers",
       // author:"Elizabeth Gilbert"
      },{
        name: "Tightrope' by Janelle Monáe ",
       // author:"Cheryl Strayed"
      },{
        name: "Lovely Day' by Bill Withers",
        //author:"Norman Vincent Peale"
      },{
        name: "Walking on Sunshine' by Katrina & The Waves",
        //author:"Sonja Lyubomirsky"
      },{
        name: "Good as Hell' by Lizzo ",
        //author:"Cheryl Strayed"
      },{
        name: "Don't Stop Me Now' by Queen",
        //author:"Norman Vincent Peale"
      },{
        name: "I Got You (I Feel Good)' by James Brown & The Famous Flames",
        //author:"Sonja Lyubomirsky"
      }
    ])


     if (type === "Music") {
       return <div>
         {movies.map((e, i) => {
           return (
                <div key={i} className="sugest-list-items">
                  <AiOutlineAudio />
                  <div className="name-and-title">
                    <div className="name_item">{e.name}</div>
                    <div className="author_item">{e.author}</div>
                  </div>
                </div>
           )
          })}
        </div>
    }
    if (type === "Movies") {
      return <div>
        {movies.map((e, i) => {
          return (
               <div key={i} className="sugest-list-items">
                 <GiFilmProjector />
                 <div className="name-and-title">
                   <div className="name_item">{e.name}</div>
                   <div className="author_item">{e.author}</div>
                 </div>
               </div>
          )
         })}
       </div>
    }
    if (type === "Books") {
      return <div>
        {books.map((e, i) => {
          return (
               <div key={i}  className="sugest-list-items">
                 <AiTwotoneBook />
                 <div className="name-and-title">
                   <div className="name_item">{e.name}</div>
                   <div className="author_item">{e.author}</div>
                 </div>
               </div>
          )
         })}
       </div>
   }
    
    return <div></div>
    }
  

