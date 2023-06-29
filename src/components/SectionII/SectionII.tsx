import React from 'react';
import MainLayout from '../Layout/MainLayout';
import TextHeading from '../TextHeading/TextHeading';
import { Element } from 'react-scroll';

export function SectionII() {
  return (
    <MainLayout>
      <Element name="authorities">
        <TextHeading content='Authorities and Members of the University' />
       
      </Element>
      <Element name="visitors">
        <TextHeading content='Visitors and Principal Officers' />
         <div>

          <div>
          <TextHeading content='Visitor' /> 
            <img src={require('../../assets/img/Tinubu.jpg')} alt='person 1 image' />
            <p>His Excellency</p>
              <p>Bola Ahmed Tinubu, GCFR</p>
              <p> President, Commander-in-Chief of the Armed Forces,</p>
            <p>  Federal Republic of Nigeria</p>
          </div>
          <br/>

          <div>
         
             
          </div>

          <div>
            <img alt='person 1 image' />
            <p>His Excellency</p>
              <p>Muhammadu Buhari, GCFR</p>
              <p> President, Commander-in-Chief of the Armed Forces,</p>
            <p>  Federal Republic of Nigeria</p>
          </div>
         </div>
      </Element>
      <Element name="honorable">
        <TextHeading content='The Honourable Minister Of Education' />
        <p>

        </p>
      </Element>
      <Element name="chancellors">
        <TextHeading content='Chancellors' />
        <p>

        </p>
      </Element>
      <Element name="pro-chancellors">
        <TextHeading content='Pro Chancellors and Chairman of Council' />
        <p>

        </p>
      </Element>
      <Element name="council-members">
        <TextHeading content='Council Members' />
        <p>

        </p>
      </Element>
      <Element name="principal-officers">
        <TextHeading content='Principal Officers' />
        <p>

        </p>
      </Element>
      <Element name="senate">
      <p>

      </p>
      </Element>
      <Element name="congregation">
        <TextHeading content='Congregation' />
        <p>

        </p>
      </Element>
      <Element name="provost-and-deans">
        <TextHeading content='Provost and Deans' />
        <p>

        </p>
      </Element>
      <Element name="officers">
        <TextHeading content='Officers of the College of Medicine' />
        <p>

        </p>
      </Element>
      <Element name="convocation">
        <TextHeading content='Convocation' />
        <p>

        </p>
      </Element>
      <Element name="honorary-awardees">
        <TextHeading content='Honorary Awardees' />
        <p>

        </p>
      </Element>
      <Element name="emeritus-professors">
        <TextHeading content='Emeritus Professors' />
        <p>

        </p>
      </Element>
      <Element name="distinguished-professors">
        <TextHeading content='Distinguished Professors' />
        <p>

        </p>
      </Element>
      <Element name="gold-medallist">
        <TextHeading content='Gold Medallist' />
        <p>

        </p>
      </Element>
    </MainLayout>
  )
}
