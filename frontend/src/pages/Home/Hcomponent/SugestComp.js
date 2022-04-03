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

    const [movies, setMovies]=useState([
      {
        name: "IT’S A WONDERFUL LIFE (1946)",
        summary:`Even though It’s a Wonderful Life is a Christmas movie, it works for any special occasion. If you are feeling helpless and lying in your bed while all your plans are canceled, this is a perfect one for you. It’s a Wonderful Life is an untimed classic. It will forever be cherished as a “wonderful movie”. The film will give you a unique outlook on your life and will teach you new values.`
      }, {
        name: "E.T. THE EXTRA-TERRESTRIAL (1982)",
        summary:`E.T. The Extra-Terrestrial is directed by Steven Spielberg. It is a huge part of many people’s childhood. E.T is a very touching movie about friendship. Nonetheless, It would warm your heart and make you feel good. The score was excellent, the costumes were exquisite, everyone was flawlessly cast, and the direction was great.`
      }, {
        name: "THE NOTEBOOK (2004)",
        summary:`The Notebook is a very heartfelt romantic movie. A poor young man and a wealthy young woman fall in love despite the odds in this love story. It is a steady, traditional love story that makes you feel like you are right there watching it unfold. The film is filled with engaging sentimental moments. It is a timeless classic. In addition to the brilliant acting, the movie features brilliant scenery which is a treat to the eyes.`
      }, {
        name: "THE PARENT TRAP (1998)",
        summary:`The Parent Trap tells the story of two twins who meet for the first time and decide to reconcile their parents. The film features Lindsey Lohan portraying both twins in a loveable manner. It is a delight from start to finish and every bit as wonderful, perhaps even better than the original. (It is a remake of a 1961 movie of the same name).`
      }, {
        name: "DUMB & DUMBER (1994)",
        summary:`A goofy comedy will work like a charm to alleviate your mood. The 1994 Jim Carrey and Jeff Daniel starrer Dumb & Dumber will give you a good laugh. The movie is dumb just as the name suggests but it is actually very well written with genius gags and nothing can beat the comic timing of Jim Carrey. He plays these over-the-top characters so well. All in all, Dumb & Dumber is still funny even after 20 years. It is a timeless comedy that is perfect for a sick day.`
      },
      {
        name: "THE SOUND OF MUSIC (1965) ",
        summary:`Another musical on our list is The Sound of Music. It is often regarded as one of the best musicals ever produced. The film is well-known for its feel-good effect and is one of the most loved musicals. It is indeed a great piece of cinema history. Moreover, Julia Andrew’s voice will have a soothing effect on your mind. The film features an enchanting story, brilliant performances along with beautiful music.`
      },

      {
        name: "THE GRAND BUDAPEST HOTEL (2014)",
        summary:`Anyone who has seen Wes Anderson’s films knows that they are a visual delight. Beautiful colors, well-thought-out shots, and loveable characters. The Grand Budapest Hotel is one of his most popular flicks and a wonderful work of art. This film is just a treat for your eyes. Every shot is like a sweet painting. Furthermore, the whole film uses pastel color palettes which give it a unique personality.`
      },
      {
        name: "BIG (1988)",
        summary:`Big is a movie about a kid who suddenly gets transformed into a grown-up. The film stars Tom Hanks who convinces us that he is in fact a child stuck inside the mind of a grown-up. Big is a really beautiful movie if we actually think about it. It is basically a portrayal of how we grow up and forget to live our life to the fullest. This film will make you realize the worth of happiness in your life.`
      },
      {
        name: "THE GOONIES (1985)",
        summary:`The Goonies is a gem of the 80s. It is whacky, crazy, and mindlessly fun. This adventure film will have you grinning from beginning to end as you embark on a quest to find One-Eyed Willy’s treasure. The Goonies is a timeless relic. It will transport you back to the time of VHS and your childhood if you grew up in the 80s. Besides the nostalgic value, the film is pretty well-written and has great acting. It is a complete package that will make your sick day easier.`
      },
      {
        name: "FORREST GUMP (1994)",
        summary:`Forrest Gump is probably one of the most emotionally powerful movies on this list. It has a very thought provoking yet easy to follow storyline. The film is directed by Robert Zemeckis and he does a great job of highlighting all the emotions of the titular character. Forrest Gump is one of those movies which can make you cry and laugh at the same. It also holds a lot of nostalgic value. You will be feeling uplifted and motivated by the time this film ends.`
      }
    ])

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


  const [music, setMusic]=useState([
      {
        name: "I Wanna Dance with Somebody",
        author:"Whitney Houston"
      },{
        name: "Dancing Queen",
        author:"ABBA"
      },{
        name: "Three Little Birds",
        author:"Bob Marley & The Wailers"
      },{
        name: "Tightrope",
        author:"Janelle Monáe "
      },{
        name: "Lovely Day",
        author:"Bill Withers"
      },{
        name: "Walking on Sunshine",
        author:"Katrina & The Waves"
      },{
        name: "Good as Hell ",
        author:"Lizzo"
      },{
        name: "Don't Stop Me Now",
        author:"Queen"
      },{
        name: "I Got You (I Feel Good)",
        author:"James Brown & The Famous Flames"
      }
    ])

    const searchOnGoogle =(e)=>{
      let searchValue = e.replace(/\s+/g, '+');
      
      window.open(
        `https://www.google.com/search?q=${searchValue}`,
        '_blank' // <- This is what makes it open in a new window.
      );
    }

     if (type === "Music") {
       return <div>
         {music.map((e, i) => {
           return (
                <button onClick={()=>searchOnGoogle(e.name)} key={i} className="sugest-list-items">
                  <AiOutlineAudio />
                  <div className="name-and-title">
                    <div className="name_item">{e.name}</div>
                    <div className="author_item">{e.author}</div>
                  </div>
                </button>
           )
          })}
        </div>
    }
    if (type === "Movies") {
      return <div>
        {movies.map((e, i) => {
          return (
               <button onClick={()=>searchOnGoogle(e.name)} key={i} className="sugest-list-items">
                 <GiFilmProjector />
                 <div className="name-and-title">
                   <div className="name_item">{e.name}</div>
                   <div className="author_item">{e.author}</div>
                 </div>
               </button>
          )
         })}
       </div>
    }
    if (type === "Books") {
      return <div>
        {books.map((e, i) => {
          return (
               <button onClick={()=>searchOnGoogle(e.name)} key={i}  className="sugest-list-items">
                 <AiTwotoneBook />
                 <div className="name-and-title">
                   <div className="name_item">{e.name}</div>
                   <div className="author_item">{e.author}</div>
                 </div>
               </button>
          )
         })}
       </div>
   }
    
    return <div></div>
    }
  

