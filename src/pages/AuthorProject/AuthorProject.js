import "./../AuthorProject/AuthorProject.css";
import { AiOutlineArrowUp } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai";
import Cover from "../../Assets/Images/bookimg.jpg";
import Voice1 from "../../Assets/Images/voice1.png";
import Voice2 from "../../Assets/Images/voice2.png";
import Voice3 from "../../Assets/Images/voice3.png";
import Voice4 from "../../Assets/Images/voice4.png";
import Update from "../../Assets/Images/update.png";
import Man from "../../Assets/Images/man.png";

import { ReactComponent as Light } from "../../Assets/Images/icon_light.svg";
import { ReactComponent as Add } from "../../Assets/Images/icon_add.svg";
import { ReactComponent as Contact } from "../../Assets/Images/icon_contact.svg";
import { ReactComponent as Share } from "../../Assets/Images/icon_share.svg";

const   AuthorProject = () => {
  return (
      <div className="container-12">
    <div class="authorproject">
      <div class="topPart">
        <div class="authorproject_bg">
         
         
          <div class="authorproject_main">
            <h1>Fanfiction</h1>
            <h2> Make A Living Writing At Fanfiction</h2>
            <h2>Plateform 2021</h2>
          </div>
        </div>


        <div class="authorproject_title">
          WHY SHOULD YOU CHOOSE FANFICTION ?
        </div>

        <div class="authorproject_grid">
          <div class="authorproject_grid1">
            <Contact />
            <h1>Dedicated Editorial Team</h1>
            <p> Fanfiction currently has a team of professional editors in English, Spanish, French. Once an author start to 
             update a story aon fanfiction  He or She will be directly guided by  a specific editor to help him </p>
            <div className="read-1"><h3 >Read More</h3></div>
            
            
          </div>
          <div class="authorproject_grid1">
            <Add />
            <h1> Professional Development </h1>
            <p> Fanfiction currently has a team  of professional editors in English, Spanish, French. Once an author start to
             update a story aon fanfiction  He or She will be directly guided by a specific editor to help him </p>
           <div className="read-1"><h3 >Read More</h3></div>
            
            
          </div>
          <div class="authorproject_grid1">
            <Light />
            <h1> Complete Incentive System </h1>
            <p> Fanfiction currently has a team of professional editors in English,Spanish, French. Once an author start to             
            update a story aon fanfiction He or She will be directly guided  a specific editor to help him </p>
            <div className="read-1"><h3 >Read More</h3></div>
            
          </div>
          <div class="authorproject_grid1">
            <Share />
            <h1> Combating Pirated Novel </h1>
            <p> Fanfiction currently has a team of professional editors in English, Spanish, French. Once an author start to 
            update a story aon fanfiction He or She will be directly guided by a specific editor to help him </p>
             <div className="read-1"><h3 >Read More</h3></div>
            
          </div>
        </div>
      </div> 
      
     
      <div class="authorproject_join">
        <h1> Come And Join Us ! </h1>
      </div>
      <div class="middlePart">
        <div class="authorproject_midbg">
          <div class="authorproject_midbg_text">
            <h1> Voice from Authors </h1>
            <img src={Cover} class="cover" alt="cover" />
            <p>
              He or She will be directly guided of professional editors in
              Fanfiction currently has a team of English, Fanfiction currently
              has Lorem ipsum is the most popular form of dummy content or
              placeholder text. It is a pseudo-Latin word originated from
              Cicero's De Finibus Bonorum et Malorum. There is no actual meaning
              of any Lorem Ipsum sentences even in Latin or any other language.
              team of Fanfiction currently has a team of Fanfiction currently
              has Lorem ipsum text allows you to create title, paragraph or
              sentence instantly without having to write actual copy. It makes
              it possible to represent how a certain webpage, infographic, blog
              post would look like with a certain amount of content and gives a
              feel of the content.
            </p>
          </div>
          <div class="authorproject_imageset">
            <div class="authorproject_imageset_row">
              <AiOutlineArrowUp class="authorproject_arrow" />
              <img
                src={Voice1}
                alt="voice"
                class="authorproject_imagese_voice"
              />
              <img
                src={Voice2}
                alt="voice"
                class="authorproject_imagese_voice"
              />
              <img
                src={Voice3}
                alt="voice"
                class="authorproject_imagese_voice"
              />
              <img
                src={Voice4}
                alt="voice"
                class="authorproject_imagese_voice"
              />
              <AiOutlineArrowDown class="authorproject_arrow" />
            </div>
          </div>
        </div>




        <div className="container">
        <div class="authorproject_program_text">
          <h1 className="h11">   Author Incentive Program</h1>
        </div>
            <div className="div-1">
            <p>
              At this instant, Mrs. Mirvan, followed by Lord Orville, walked up
              to us. You will easily believe it was not difficult for me to
              recover my gravity; but what was my consternation, when this
              strange man, not know your Lordship. What can I say for my
              usurpation?-Yet, faith, my Lord, such a prize was not to be
              neglected."
            </p>
            <br></br>
            <h3 className="read-more"> Read More</h3>

            </div>
              
            <div className="div-2">
            <img src={Update} alt="Update" className="authorproject_update"/>
            </div>
        </div>


        <div class="authorproject_writer">
          <div class="authorproject_writer_main">
              <h1>come and start writing your story </h1>
              <h2> Writing</h2>
          </div>
        </div>
       
       
       
      
        <div class="authorproject_writing">
          <h1> Writer's Writing Contest</h1>
          <br />
          <p> Writer contest is in full swing with generous </p>
          <p> Writer prize incentives, so get involved !</p>

          <h3> Click Now</h3>

          <h4> Fanfiction Academy for Authors </h4>
        </div>
      </div>
      <div class="bottomPart">
        <div class="authorproject_man">
          <div className="container">
            <div className="authorproject-text">
            <div class="authorproject_one">
              <div><h2>1</h2></div>
              <div><h1>Basic and practical writing tutorials</h1>
                <p>Fanfiction's senior editorial team will provde you with an in-depth anaylysis of the most popular online writing style,
                an unlock the wealth code that lead sto a pop-up book. </p></div>
            </div>
            <div class="authorproject_one">
              <div><h2>2 </h2></div>
              <div><h1>The Web artical routine analysis</h1>
                <p> We will provide personalized review and unidance for promising and exclusive authors to help them create a
                 hit book </p>
              </div>
            </div>
            <div class="authorproject_one">
              <div><h2> 3</h2></div>
              <div><h1>One-on-one writing coaching </h1>
              <p> Our facebook grooup is a loving community where yuo can share your writing routine, dicuss new ideas and answer questions for other authors. </p>
              </div>
            </div>
            <div class="authorproject_one">
              <div><h2> 4</h2></div>
              <div><h1>A friendly and supportive author circle</h1>
                <p> Cambridge graduate writing teacher, from the proposed theme to write the outline, to the plot design and details, to
                 teach you from scratch, write a good novel </p></div>
            </div>
            </div>
            <div className="authorproject-image">
            <img src={Man} alt="man" class="authorproject_manimage" />
          </div>
          </div>
        </div>

        <div class="authorproject_mail">
          <h1> Collection of emails of authors who want to co-operate </h1>
          <br />
          <p>
            leave your email address and an exclusive editor will contact your
            directly
          </p>
        </div>
        <div class="authorproject_input">
          <div className="container">
          <div class="authorproject_input_context">
            <input type="text" placeholder="Enter Your Mail "class="authorproject_input_data"/>
          </div>
          <div className="submit-a"><button>submit</button></div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AuthorProject;
