import logo from './images/logo.svg';
import anisha from './images/avatar-anisha.png'
import ali from './images/avatar-ali.png'
import richard from './images/avatar-richard.png'
import shanai from './images/avatar-shanai.png'
import charts from './images/illustration-intro.svg';
import './App.css';
import './AppMedia.css';

function MyButton(){
  return(
    <div className='buttonDiv'>
      <button className='button'>Get Started</button>
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
      <MyButton></MyButton>
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
      <MyButton></MyButton>
    </section>
    </div>
  )
}

export default Website;
