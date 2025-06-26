import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useRef } from 'react'

const WelcomeSms = () => {
  
   const videoRef= useRef(null);
  
  useEffect(
    ()=>{
      const handleScroll=()=>{
        const video= videoRef.current;
        const rect=video.getBoundingClientRect();
        const inVisible=rect.top>=0 && rect.bottom<=window.innerHeight;
        
        if(isVisible){
          video.play();

        }
        else{
          video.pause();}
      }

      window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    }, [] 
  );

  return (
    <div style={styles.container}>
      <div style={styles.left}><h2>Welcome to Rangpur Ideal Academy</h2>
        <p>রংপুর আইডিয়াল একাডেমির অফিশিয়াল ওয়েবসাইটে আপনাকে আন্তরিক স্বাগত।
শিক্ষা, নৈতিকতা ও মানবিক মূল্যবোধের সমন্বয়ে গড়ে উঠা আমাদের এই শিক্ষা প্রতিষ্ঠান,
শিক্ষার্থীদের আদর্শ নাগরিক হিসেবে গড়ে তোলার লক্ষ্যে অঙ্গীকারবদ্ধ।

আমাদের এই ডিজিটাল প্ল্যাটফর্মে আপনি জানতে পারবেন একাডেমির লক্ষ্য, কার্যক্রম, শিক্ষকবৃন্দ এবং বিভিন্ন অর্জন সম্পর্কে।
আপনার আন্তরিক সহযোগিতা ও আগ্রহ আমাদের পথচলাকে আরও দৃঢ় ও সফল করে তুলবে।

চলুন, একসাথে গড়ি আলোকিত আগামী।</p>
<p>
Welcome to the official website of Rangpur Ideal Academy, where education meets excellence. We are committed to nurturing young minds with knowledge, values, and skills to help them thrive in a dynamic world. At our academy, we prioritize a balanced development of students — academically, morally, and socially.

We invite you to explore our digital platform to learn more about our vision, programs, faculty, and achievements. Thank you for being a part of our educational journey.

Together, let's build a brighter future!
</p>
</div>

<div style={styles.right}> <video
        ref={videoRef}
        autoPlay
        muted
        loop
       controls
        style={{ width: '100%', height: '400px', borderRadius: '8px' }}
      >
        <source  src="/ria_theme_song.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video></div>
        
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    gap: '20px',
    padding: '20px',
  },
  left: {
    flex: 1, // or width: '50%'
    backgroundColor: '#f0f0f0',
    padding: '20px',
  },
  right: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: '20px',
    
    
  },
};

export default WelcomeSms