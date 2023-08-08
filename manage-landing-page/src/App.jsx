import openButton from './images/icon-hamburger.svg';
import logo from './images/logo.svg';
import logo2 from './images/logo2.svg';
import anisha from './images/avatar-anisha.png'
import ali from './images/avatar-ali.png'
import richard from './images/avatar-richard.png'
import shanai from './images/avatar-shanai.png'
import charts from './images/illustration-intro.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';

import './App.css';
import './AppMedia.css';

function MyButton(){
  return(
    <div className='buttonDiv'>
      <button className='button'>Get Started</button>
    </div>
  )
}

function MyButton1(){
  return(
    <div className='buttonDiv1'>
      <button className='button1'>Get Started</button>
    </div>
  )
}

function InputField(){
  return(
    <input type="email" autocomplete="on" name="email" class="input" placeholder="Updates in your inbox..."></input>
  )
}

function Mybutton2(){
  return(
    <div className='buttonDiv2'>
      <button className='button2'>Get Started</button>
    </div>
  )
}

function Mybutton3(){
  return(
    <div className='buttonDiv3'>
      <button className='button3'>Get Started</button>
    </div>
  )
}

function Navbar(){
  return(
    <div className='navbar'>
        <nav>
          <ul>
            <li><a href="">Pricing</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Community</a></li>
          </ul>
        </nav>
      </div>
  )
}

function Website() {
  return (
    <div className='container'>
    <div className='nav'>
      <div>
        <img className='logo' src={logo} alt="logo" />
      </div>
      <Navbar></Navbar>
      <MyButton1></MyButton1>
      <img className='open' src={openButton} alt="open" />
    </div>

    <section>
      <div className='left-right'>
        <div className='left'>
          <h1>Bring everyone <br /> together to build <br />better products</h1>
          <p className='p-tag'> Manage makes it simple for software teams <br /> to plan day-to-day 
          tasks while keeping the <br /> larger team goals in view.</p>
          <MyButton></MyButton>
        </div>
        <div className='right'>
          <img className='charts' src={charts} alt="charts" />
        </div>
      </div>
    </section>

    <section>
      <div className='left-right2'>
        <div className='left2'>
          <h2 className='header2'>What's diffrent about <br />Manage?</h2>
          <p className='p-tag'>Manage provides all the functionality your <br /> team needs, without 
          the complexity. Our <br /> software is tailor-made for modern digital <br /> 
          product teams. </p>
        </div>
        <div className='right2'>
        <div className='rightInfo'>
            <p className='numtag'>01</p>
            <h4>Track company-wide progress</h4>
            </div>
  <p>See how your day-to-day tasks fit into the wider vision. <br /> Go from 
  tracking progress at the milestone level all the <br /> way done to the 
  smallest of details. Never lose sight of <br /> the bigger picture again.</p>
          <div className='rightInfo'>
          <p className='numtag'>02</p>
            <h4>Advanced built-in reports</h4>
            </div>
  <p>Set internal delivery estimates and track progress toward <br /> company 
  goals. Our customisable dashboard helps you <br /> build out the reports 
  you need to keep key stakeholders <br /> informed.</p>
          <div className='rightInfo'>
          <p className='numtag'>03</p>
            <h4>Everything you need in one place</h4>
            </div>
  <p>Stop jumping from one service to another to <br /> communicate, store files, 
  track tasks and share <br /> documents. Manage offers an all-in-one team <br /> 
  productivity solution.</p>
        </div>
      </div>
    </section>

    <section>
      <h2 className='header3'>What they've said</h2>
      <div className='testimonials'>
        <div className='test'>
          <img className='people' src={anisha} alt="anisha" />
          <h4 className='name'>Anisha Li</h4>
          <p className='commments'>“Manage has supercharged our team’s workflow. The <br /> ability to maintain 
          visibility on larger milestones at all times <br /> keeps everyone motivated.”</p>
        </div>
        <div className='test'>
          <img className='people' src={ali} alt="ali" />
          <h4 className='name'>Ali Bravo</h4>
          <p className='commments'>“We have been able to cancel so many other subscriptions <br /> since using 
         Manage. There is no more cross-channel <br /> confusion and everyone is much 
         more focused.”</p>
        </div>
        <div className='test'>
          <img className='people' src={richard} alt="richard" />
          <h4 className='name'>Richard Watts</h4>
          <p className='commments'>“Manage allows us to provide structure and process. It <br /> keeps us organized 
          and focused. I can’t stop recommending <br /> them to everyone I talk to!”</p>
        </div>
        <div className='test'>
          <img className='people' src={shanai} alt="shanai" />
          <h4 className='name'>Shanai Gough</h4>
          <p className='commments'>“Their software allows us to track, manage and collaborate <br /> on our projects 
          from anywhere. It keeps the whole team in <br />-sync without being intrusive.”</p>
        </div>
      </div>
      <Mybutton2></Mybutton2>
    </section>

    <section className='section4'>
      <div className='sec4Div'>
        <h2 className='h24'>Simplify how your team <br />works today.</h2>
        <Mybutton3></Mybutton3>
      </div>
    </section>

    <footer className='footer'>
      <div className='footerDiv'>
      <div className='footerDiv1'>
      <img className='logo2' src={logo2} alt="logo2" />
      <div className='icons'>
    <img className='facebook' src={facebook} alt="facebook" />
    <img className='youtube' src={youtube} alt="youtube" />
    <img className='twitter' src={twitter} alt="twitter" />
    <img className='pinterest' src={pinterest} alt="pinterest" />
    <img className='instagram' src={instagram} alt="instagram" />
      </div>
      </div>

      <div className='footerdiv2'>
        <ul className='nav2'>
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
      </div>
      <div className='footerDiv3'>
        <ul className='nav3'>
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
      <div className='footerDiv4'>
        <div className='inputarea'>
        <InputField></InputField>
        <button className='button4'>Go</button>
        </div>
        <div>
          <p className='copyright'>Copyright 2020. All Rights Reserved</p>
        </div>
      </div>
      </div>
    </footer>
    </div>
  )
}

export default Website;
