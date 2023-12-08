import React from 'react';

// CSS
import './shopslider.css'
import './shopsliderresponsive.css'

// IMAGE
import iphone14Pro from './iphone-14-pro.png'
import garminWatch from './smartwatch.png'
import galaxybuds2 from './galaxybuds2.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';


// import required modules
import { EffectCreative } from 'swiper/modules';
import { Link } from 'react-router-dom';



export default function App() {
  return (
    <>
    
    <section className='ShopSwiperSection'>
    
      <Swiper
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="ShopSwiper"
      >
        <SwiperSlide className='ShopSwiperSlide'>
          <div className='ShopSwiperSlide-content'>
            <div className='ShopSwiperSlide-content-colorName'>
              <span className='ShopSwiperSlide-DeepPurple'>
                Deep Purple
              </span>
            </div>
            <div className='ShopSwiperSlide-content-itemName'>
              <span>IPhone 14 Pro</span>
            </div>
            <div className='ShopSwiperSlide-content-btn'>
              <Link to='/detail/1'>
                <button className='ShopSwiperSlide-DeepPurple-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
          <div className='ShopSwiperSlide-image'>
            <img className='ShopSwiperSlide-image-iphone14' src={iphone14Pro} alt='iphone14Pro' />
          </div>
          <div className='ShopSwiperSlide-svg'>
            <svg id="visual" viewBox="0 0 1140 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
              <path d="M0 404L27.2 401.3C54.3 398.7 108.7 393.3 163 400.7C217.3 408 271.7 428 326 433.7C380.3 439.3 434.7 430.7 488.8 419.5C543 408.3 597 394.7 651.2 397.8C705.3 401 759.7 421 814 417.7C868.3 414.3 922.7 387.7 977 373.5C1031.3 359.3 1085.7 357.7 1112.8 356.8L1140 356L1140 601L1112.8 601C1085.7 601 1031.3 601 977 601C922.7 601 868.3 601 814 601C759.7 601 705.3 601 651.2 601C597 601 543 601 488.8 601C434.7 601 380.3 601 326 601C271.7 601 217.3 601 163 601C108.7 601 54.3 601 27.2 601L0 601Z" fill="#e668e6">
              </path>
              <path d="M0 431L27.2 426.5C54.3 422 108.7 413 163 418.2C217.3 423.3 271.7 442.7 326 443.5C380.3 444.3 434.7 426.7 488.8 429.7C543 432.7 597 456.3 651.2 457.8C705.3 459.3 759.7 438.7 814 428.7C868.3 418.7 922.7 419.3 977 426.3C1031.3 433.3 1085.7 446.7 1112.8 453.3L1140 460L1140 601L1112.8 601C1085.7 601 1031.3 601 977 601C922.7 601 868.3 601 814 601C759.7 601 705.3 601 651.2 601C597 601 543 601 488.8 601C434.7 601 380.3 601 326 601C271.7 601 217.3 601 163 601C108.7 601 54.3 601 27.2 601L0 601Z" fill="#aa59c1">
              </path>
              <path d="M0 489L27.2 486.5C54.3 484 108.7 479 163 480.3C217.3 481.7 271.7 489.3 326 489.7C380.3 490 434.7 483 488.8 481.3C543 479.7 597 483.3 651.2 476.8C705.3 470.3 759.7 453.7 814 448C868.3 442.3 922.7 447.7 977 451.8C1031.3 456 1085.7 459 1112.8 460.5L1140 462L1140 601L1112.8 601C1085.7 601 1031.3 601 977 601C922.7 601 868.3 601 814 601C759.7 601 705.3 601 651.2 601C597 601 543 601 488.8 601C434.7 601 380.3 601 326 601C271.7 601 217.3 601 163 601C108.7 601 54.3 601 27.2 601L0 601Z" fill="#754798">
              </path>
              <path d="M0 519L27.2 518.8C54.3 518.7 108.7 518.3 163 517.7C217.3 517 271.7 516 326 519.7C380.3 523.3 434.7 531.7 488.8 536C543 540.3 597 540.7 651.2 533.5C705.3 526.3 759.7 511.7 814 508C868.3 504.3 922.7 511.7 977 517.7C1031.3 523.7 1085.7 528.3 1112.8 530.7L1140 533L1140 601L1112.8 601C1085.7 601 1031.3 601 977 601C922.7 601 868.3 601 814 601C759.7 601 705.3 601 651.2 601C597 601 543 601 488.8 601C434.7 601 380.3 601 326 601C271.7 601 217.3 601 163 601C108.7 601 54.3 601 27.2 601L0 601Z" fill="#47346d">
              </path>
              <path d="M0 560L27.2 554.3C54.3 548.7 108.7 537.3 163 538.5C217.3 539.7 271.7 553.3 326 557.7C380.3 562 434.7 557 488.8 551.5C543 546 597 540 651.2 536C705.3 532 759.7 530 814 534C868.3 538 922.7 548 977 550.2C1031.3 552.3 1085.7 546.7 1112.8 543.8L1140 541L1140 601L1112.8 601C1085.7 601 1031.3 601 977 601C922.7 601 868.3 601 814 601C759.7 601 705.3 601 651.2 601C597 601 543 601 488.8 601C434.7 601 380.3 601 326 601C271.7 601 217.3 601 163 601C108.7 601 54.3 601 27.2 601L0 601Z" fill="#231f42">
              </path>
            </svg>

          </div>
        </SwiperSlide>
        <SwiperSlide className='ShopSwiperSlide'>
          <div className='ShopSwiperSlide-content'>
            <div className='ShopSwiperSlide-content-colorName'>
              <span className='ShopSwiperSlide-OcenBlue'>
                Ocean Blue
              </span>
            </div>
            <div className='ShopSwiperSlide-content-itemName'>
              <span>vívoactive® 4</span>
            </div>
            <div className='ShopSwiperSlide-content-btn'>
              <Link to='/detail/18'>
                <button className='ShopSwiperSlide-OcenBlue-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
          <div className='ShopSwiperSlide-image'>
            <img className='ShopSwiperSlide-image-garmin' src={garminWatch} alt='GarminWatch' />
          </div>
          <div className='ShopSwiperSlide-svg'>
            <svg id="visual" viewBox="0 0 1140 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
              <path d="M0 399L38 401.8C76 404.7 152 410.3 228 423.5C304 436.7 380 457.3 456 444.2C532 431 608 384 684 370.8C760 357.7 836 378.3 912 383.8C988 389.3 1064 379.7 1102 374.8L1140 370L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#41f3f5">
              </path>
              <path d="M0 437L38 428.7C76 420.3 152 403.7 228 399C304 394.3 380 401.7 456 419.7C532 437.7 608 466.3 684 474.8C760 483.3 836 471.7 912 457.5C988 443.3 1064 426.7 1102 418.3L1140 410L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#00bdf0">
              </path>
              <path d="M0 530L38 511.3C76 492.7 152 455.3 228 438.8C304 422.3 380 426.7 456 443.2C532 459.7 608 488.3 684 505.2C760 522 836 527 912 511.2C988 495.3 1064 458.7 1102 440.3L1140 422L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#0082d2">
              </path>
              <path d="M0 511L38 520.2C76 529.3 152 547.7 228 547.2C304 546.7 380 527.3 456 520.5C532 513.7 608 519.3 684 526.5C760 533.7 836 542.3 912 538C988 533.7 1064 516.3 1102 507.7L1140 499L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#0046a5">
              </path>
              <path d="M0 562L38 564.5C76 567 152 572 228 574.5C304 577 380 577 456 566.3C532 555.7 608 534.3 684 526C760 517.7 836 522.3 912 525.7C988 529 1064 531 1102 532L1140 533L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#05006d">
              </path>
            </svg>

          </div>
        </SwiperSlide>
        <SwiperSlide className='ShopSwiperSlide'>
          <div className='ShopSwiperSlide-content'>
            <div className='ShopSwiperSlide-content-colorName'>
              <span className='ShopSwiperSlide-BoraPurple'>
                Bora Purple
              </span>
            </div>
            <div className='ShopSwiperSlide-content-itemName'>
              <span>Galaxy Buds 2</span>
            </div>
            <div className='ShopSwiperSlide-content-btn'>
              <Link to='/detail/21'>
                <button className='ShopSwiperSlide-BoraPurple-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
          <div className='ShopSwiperSlide-image'>
            <img className='ShopSwiperSlide-image-galaxy' src={galaxybuds2} alt='galaxybuds2' />
          </div>
          <div className='ShopSwiperSlide-svg'>
            <svg id="visual" viewBox="0 0 1140 600" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
              <path d="M0 399L38 401.8C76 404.7 152 410.3 228 423.5C304 436.7 380 457.3 456 444.2C532 431 608 384 684 370.8C760 357.7 836 378.3 912 383.8C988 389.3 1064 379.7 1102 374.8L1140 370L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#c791d4">
              </path>
              <path d="M0 437L38 428.7C76 420.3 152 403.7 228 399C304 394.3 380 401.7 456 419.7C532 437.7 608 466.3 684 474.8C760 483.3 836 471.7 912 457.5C988 443.3 1064 426.7 1102 418.3L1140 410L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#a974b6">
              </path>
              <path d="M0 530L38 511.3C76 492.7 152 455.3 228 438.8C304 422.3 380 426.7 456 443.2C532 459.7 608 488.3 684 505.2C760 522 836 527 912 511.2C988 495.3 1064 458.7 1102 440.3L1140 422L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#8c5899">
              </path>
              <path d="M0 511L38 520.2C76 529.3 152 547.7 228 547.2C304 546.7 380 527.3 456 520.5C532 513.7 608 519.3 684 526.5C760 533.7 836 542.3 912 538C988 533.7 1064 516.3 1102 507.7L1140 499L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#703d7d">
              </path>
              <path d="M0 562L38 564.5C76 567 152 572 228 574.5C304 577 380 577 456 566.3C532 555.7 608 534.3 684 526C760 517.7 836 522.3 912 525.7C988 529 1064 531 1102 532L1140 533L1140 601L1102 601C1064 601 988 601 912 601C836 601 760 601 684 601C608 601 532 601 456 601C380 601 304 601 228 601C152 601 76 601 38 601L0 601Z" fill="#552262">
              </path>
            </svg>
          </div>
        </SwiperSlide>

      </Swiper>
    </section>
    </>

  );
}
