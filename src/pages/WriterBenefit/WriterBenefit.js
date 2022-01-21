import Cashback from "../../Assets/Images/cashback.png";
import Apply from "../../Assets/Images/apply.png";
import "./WriterBenefit.css";

function WriterBenefit() {
  return (
    <div className="container-1">
      <div class="background_color_trial_2 topPart">
        <div class="writerrewards_bg">
          <div className="container">
            <div class="writerrewards_main">
              <h1>Fanfiction</h1>
              <h2>WRITER'S REWARED PLAN 2021</h2>
              <h3>DURATION: 04/01/2021- 31/12/2021</h3>
            </div>
          </div>
        </div>
        <div class="writerrewards">
          <div class="writerrewards_cashback">
            <div className="container">
              <img src={Cashback} alt="logo" />
              <h1>NOW YOU ONLY NEED 5,000 WORDS TO APPLY FOR A CONTRACT!</h1>
            </div>
          </div>

          <div class="writerrewards_background">
            <div className="container">
              <div class="writerrewards_past">
                <h1>PAST</h1>
                <div>
                  <ul class="writerrewards_list">
                    <li class="list1"> 1. Only premium words count </li>
                    <li class="list2">
                      2. Exclusive: MAB ( monthly attendance bouce )
                    </li>
                    <li class="list3"> 3. Non-exclusive: Profit share only </li>
                  </ul>
                </div>
              </div>
              <div class="writerrewards_past">
                <h2>PAST</h2>
                <div>
                  <ul class="writerrewards_list">
                    <li class="list1"> 1. EVERY WORD COUNTS! </li>
                    <li class="list2">
                      2. EXCLUSIVE:- Signing Bouns+ Completion Bonus + Monthly
                    </li>
                    <li class="list3"> 3. Non-exclusive: 50$ NON-EXCLUSIVE </li>
                  </ul>
                </div>
              </div>

              <div class="writerrewards_reward">
                <div>
                  <h1> EXCLUSIVE REWARD </h1>
                </div>
                <div class="writerrewards_box">
                  <div class="writerrewards_bonus1">
                    <h2>SINGING BONUS</h2>
                    <h3>$100</h3>
                    <h4>
                      $100 will be added to your account when your exclusive
                      book reaches 39k words.
                    </h4>
                  </div>
                  <div class="writerrewards_bonus1">
                    <h2> MAB</h2>
                    <h3>$150</h3>
                    <h4>
                      Update with 50k words for 25 days or more in amonth, you
                      will receive $150 as that months MAB
                    </h4>
                  </div>
                </div>
                <div class="writerrewards_table_background">
                  <div class="writerrewards_table">
                    <div class="writerrewards_table_box">
                      <h2> COMPLETION BONUS </h2>
                    </div>
                    <div class="writerrewards_table_box1">
                      <table>
                        <thead>
                          <tr>
                            <th>When Compeleted</th>
                            <th>Completion Bonus</th>
                          </tr>
                          <tr>
                            <td>
                              <p>80K- 120K words</p>
                            </td>

                            <td>$150</td>
                          </tr>
                          <tr>
                            <td>
                              <p>120K- 150K words</p>
                            </td>

                            <td>$250</td>
                          </tr>
                          <tr>
                            <td>
                              <p>150K- 200K words</p>
                            </td>

                            <td>$325</td>
                          </tr>
                          <tr>
                            <td>
                              <p> 200k words</p>
                            </td>

                            <td>$400</td>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <p className="pl">
                      *The signing Bouns, MAB and Completion Bonus apply to
                      exclusive contracts only.
                    </p>
                  </div>
                </div>
              </div>
              <div class="writerrewards_bottom">
                <div>
                  <h1 className="h11"> GET YOUR CONTRACT TODAY</h1>
                </div>
                <p className="lastpara">
                  Create a story at www.fanfiction.com and uploade more than
                  5,0000 words in the story; Click the "Apply for a contract"
                  button to submit the application!{" "}
                </p>
                <div class="writerrewards_bottom_img">
                  <img src={Apply} alt="logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WriterBenefit;
