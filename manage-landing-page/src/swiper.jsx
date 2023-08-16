// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import anisha from './images/avatar-anisha.png'
import ali from './images/avatar-ali.png'
import richard from './images/avatar-richard.png'
import shanai from './images/avatar-shanai.png'

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <section className='swiperSec'>
        <h2 className='header3'>What they've said</h2>

    <Swiper
      spaceBetween={400}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        <div className='testimonials'>
      <SwiperSlide><div className='test'>
    <img className='people' src={anisha} alt="anisha" />
    <h4 className='name'>Anisha Li</h4>
    <p className='commments'>“Manage has supercharged our team’s workflow. The <br /> ability to maintain 
    visibility on larger milestones at all times <br /> keeps everyone motivated.”</p>
  </div></SwiperSlide>
      <SwiperSlide><div className='test'>
    <img className='people' src={ali} alt="ali" />
    <h4 className='name'>Ali Bravo</h4>
    <p className='commments'>“We have been able to cancel so many other subscriptions <br /> since using 
   Manage. There is no more cross-channel <br /> confusion and everyone is much 
   more focused.”</p>
  </div></SwiperSlide>
      <SwiperSlide><div className='test'>
    <img className='people' src={richard} alt="richard" />
    <h4 className='name'>Richard Watts</h4>
    <p className='commments'>“Manage allows us to provide structure and process. It <br /> keeps us organized 
    and focused. I can’t stop recommending <br /> them to everyone I talk to!”</p>
  </div></SwiperSlide>
      <SwiperSlide><div className='test'>
    <img className='people' src={shanai} alt="shanai" />
    <h4 className='name'>Shanai Gough</h4>
    <p className='commments'>“Their software allows us to track, manage and collaborate <br /> on our projects 
    from anywhere. It keeps the whole team in <br />-sync without being intrusive.”</p>
  </div></SwiperSlide>
  </div>
    </Swiper>
    
    </section>
  );
};




//   <div className='test'>
//     <img className='people' src={anisha} alt="anisha" />
//     <h4 className='name'>Anisha Li</h4>
//     <p className='commments'>“Manage has supercharged our team’s workflow. The <br /> ability to maintain 
//     visibility on larger milestones at all times <br /> keeps everyone motivated.”</p>
//   </div>
//   <div className='test'>
//     <img className='people' src={ali} alt="ali" />
//     <h4 className='name'>Ali Bravo</h4>
//     <p className='commments'>“We have been able to cancel so many other subscriptions <br /> since using 
//    Manage. There is no more cross-channel <br /> confusion and everyone is much 
//    more focused.”</p>
//   </div>
//   <div className='test'>
//     <img className='people' src={richard} alt="richard" />
//     <h4 className='name'>Richard Watts</h4>
//     <p className='commments'>“Manage allows us to provide structure and process. It <br /> keeps us organized 
//     and focused. I can’t stop recommending <br /> them to everyone I talk to!”</p>
//   </div>
//   <div className='test'>
//     <img className='people' src={shanai} alt="shanai" />
//     <h4 className='name'>Shanai Gough</h4>
//     <p className='commments'>“Their software allows us to track, manage and collaborate <br /> on our projects 
//     from anywhere. It keeps the whole team in <br />-sync without being intrusive.”</p>
//   </div>

