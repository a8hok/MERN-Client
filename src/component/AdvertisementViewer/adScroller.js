import React, { useRef, useEffect, useState } from 'react';

const AdScroller = ({children}) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        if (scrollWidth - scrollLeft-30 <= clientWidth) {
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          scrollContainerRef.current.scrollLeft += 1;
        }
      }, 20);

    return () => clearInterval(intervalId);
  }, []);

  const moveFront = (e) => {
    const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
    if (scrollWidth - scrollLeft > clientWidth) {
      scrollContainerRef.current.scrollLeft += 250;
    }
  }

  const moveBack = (e) => {
    const { clientWidth, scrollLeft } = scrollContainerRef.current;
    if (scrollLeft >= clientWidth) {
      scrollContainerRef.current.scrollLeft -= 250;
    } else {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }

  return (
    <div className="all-events-Scroller_Container">
        {children[0]?.length > 4 && <button className="Back-Arrow-AD_Button" onClick={moveBack}>{`<`}</button>}
            <div ref={scrollContainerRef} className="third-full-con-pro-Ad">  
                {children} 
            </div>
        {children[0]?.length > 4 && <button className="Front-Arrow-AD_Button" onClick={moveFront}>{`>`}</button>}
    </div>
  );
}

export default AdScroller
