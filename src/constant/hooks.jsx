// import { useEffect } from 'react';

// const useSmoothScroll = (speed = 0.1) => {
//   useEffect(() => {
//     let scrollPosition = 0;
//     let targetScroll = window.scrollY;

//     const updateScroll = () => {
//       scrollPosition += (targetScroll - scrollPosition) * speed;
//       window.scrollTo(0, scrollPosition);
//       requestAnimationFrame(updateScroll);
//     };

//     const handleScroll = () => {
//       targetScroll = window.scrollY;
//     };

//     window.addEventListener('scroll', handleScroll);
//     updateScroll();

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [speed]);
// };

// export default useSmoothScroll;
