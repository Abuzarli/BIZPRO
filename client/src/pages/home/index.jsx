import React from 'react'
import Helmet from 'react-helmet'
import style from './index.module.css'
import { Grid } from '@mui/material';

const HOME = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta charset="utf-8" />
      </Helmet>
      <section className={style.section_1}>
        <div className={style.section_1_content}>
            <h1  className={style.section_1_title}>HELLO WE'RE BIZPRO</h1>
            <h6 className={style.section_1_text}> SUB HEAD,MOTTO OR MISSION SUBTITLE</h6>
            <button  className={style.section_1_button}>SEE OUR PROJECTS</button>
        </div>
      </section>


{/* SECTION 2 */}
      <section className={style.section_2}>
        <div className={style.section_2_content}>
        <h1 className={style.section_2_title}>
        ABOUT OUR BIZPRO
        </h1>
        <div className={style.section_2_line}></div>
        <p className={style.section_2_text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
        </p>
        </div>
        <div className={style.card_section}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {/* CARD 1 */}
  <Grid item xs={3}>
  <div className={style.section_2_cards}>
                <div className={style.icon_circle}><div className={style.section_2_card_icon}><i className='fa fa-pencil '></i></div></div>
                <h5 className={style.card_title}>WEB DEVELOPMENT</h5>
                <p className={style.card_text}>
                Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p> 
                <button className={style.card_button}>More Details</button>               
            </div>
  </Grid>

  {/* CARD 2 */}
  <Grid item xs={3}>
  <div className={style.section_2_cards}>
                <div className={style.section_2_card_icon}> <i className='fa fa-camera'></i></div>
                <h5 className={style.card_title}>PHOTOGRAPHY</h5>
                <p className={style.card_text}>
                Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p> 
                <button className={style.card_button}>More Details</button>               
            </div>
  </Grid>

  {/* CARD 3 */}
  <Grid item xs={3}>
  <div className={style.section_2_cards}>
                <div className={style.section_2_card_icon}><i className='fa fa-life-ring'></i></div>
                <h5 className={style.card_title}>DIGITAL MEDIA</h5>
                <p className={style.card_text}>
                Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p> 
                <button className={style.card_button}>More Details</button>               
            </div>
  </Grid>

  {/* CARD 4*/}
  <Grid item xs={3}>
  <div className={style.section_2_cards}>
                <div className={style.section_2_card_icon}><i className='fa fa-line-chart'></i></div>
                <h5 className={style.card_title}>ONLINE MARKETING</h5>
                <p className={style.card_text}>
                Lorem ipsum dolor sit amet, consect et adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
                    </p> 
                <button className={style.card_button}>More Details</button>               
            </div>

  </Grid>
  </Grid>

        </div>
      </section>


      {/* SECTION 3 */}
      <section className={style.section_3}>
        <div className={style.section_3_head}>
        <h1 className={style.section_2_title}>
        MEET OUR TEAM
        </h1>
        <div className={style.section_2_line}></div>
        <p className={style.section_2_text}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
        </p>
        </div>
        <div className={style.section_3_cards}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
          <div className={style.section_3_crd}>
          <div><img src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg" alt="" /></div>
          <div className={style.card_about}>
          <h4>Gonzalez Gina</h4>
          <p>WEB DEVELOPER</p>
          </div>
          </div>
          </Grid>

          <Grid item xs={3}>
          <div className={style.section_3_crd}>
          <div><img src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg" alt="" /></div>
          <div className={style.card_about}>
          <h4>Gonzalez Gina</h4>
          <p>WEB DEVELOPER</p>
          </div>
          </div>
          </Grid>

          <Grid item xs={3}>
          <div className={style.section_3_crd}>
          <div><img src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg" alt="" /></div>
          <div className={style.card_about}>
          <h4>Gonzalez Gina</h4>
          <p>WEB DEVELOPER</p>
          </div>
          </div>
          </Grid>


          </Grid>
        </div>
      </section>
    </>
  )
}

export default HOME
