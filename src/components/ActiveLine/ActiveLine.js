import React from 'react';
import './ActiveLine.scss';

const ActiveLine = () => {
  
  let bigPath = 'M35.3992 85.459C100.608 198.402 304.959 -31.2987 315.813 44.8924C321.395 84.0764 290.149 156.892 206.149 168.873C84.5655 186.213 -2.55799 -31.6269 2.04738 6.35426C4.65039 27.8217 21.8819 62.0469 35.3992 85.459Z';
  let mediumPath = 'M271.113 59.0329C271.112 22.4645 49.4079 29.5699 15.0456 29.5699C-17.8867 29.5699 13.1735 -5.42796 89.7963 3.43952C200.703 16.2746 199.533 66.2032 182.732 71.519C118 91.9999 271.113 66.6132 271.113 59.0329Z';
  let smallPath = 'M271.113 59.0329C271.112 22.4645 49.4079 29.5699 15.0456 29.5699C-17.8867 29.5699 13.1735 -5.42796 89.7963 3.43952C200.703 16.2746 199.533 66.2032 182.732 71.519C118 91.9999 271.113 66.6132 271.113 59.0329Z';
  

  const pointRef              = React.useRef(null);
  const [pathWay, setPathWay] = React.useState(bigPath);
  const [width, setWidth]     = React.useState(window.innerWidth);
  const [xPosition, setXPosition] = React.useState('50%');
  const [yPosition, setYPosition] = React.useState('50%');


  
  
  React.useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };
      if ( width <= 580 ) {
        setPathWay(smallPath);
        setXPosition('20%');
        setYPosition('70%');
      } 

      else if ( width <= 960 && width > 580 ) {
        setPathWay(mediumPath);
        setXPosition('50%');
        setYPosition('70%');
      } 

      else if ( width > 960 ) {
        setPathWay(bigPath);
        setXPosition('60%');
        setYPosition('70%');
      }

    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [width, smallPath, mediumPath, bigPath]);

  /* 
  React.useEffect(()=> {
    setPointCoordinates({
      x: pointRef.current.cx,
      н: pointRef.current.cy,
    })
   }, [setPointCoordinates] )*/

  return (
    <div className='activeline'>
      <svg >
        <svg x={xPosition} y={yPosition} className='wayLine'>
          <defs>
            <marker
              id="dot"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="5"
              markerHeight="5">
              <circle cx="5" cy="5" r="5" fill="white" />
              <animateMotion dur="5s" repeatCount="indefinite">
                    <mpath href="#wire"></mpath>
            </animateMotion>
            </marker>

            <marker
              id="dot2"
              viewBox="0 0 10 10"
              refX="5"
              refY="5"
              markerWidth="5"
              markerHeight="5">
              <circle cx="5" cy="5" r="5" fill="white" />
              <animateMotion dur="5s" repeatCount="indefinite">
                    <mpath href="#wire"></mpath>
            </animateMotion>
            </marker>
          </defs>

          <path id="wire"
                d={pathWay}> </path>

         <circle cx="0" cy="0" r="5" fill="#fff" ref={pointRef} id='circle'>
            {<animateMotion dur="5s" repeatCount="indefinite">
                <mpath href="#wire"></mpath>
              </animateMotion>}

                </circle> 
{/*           <polyline points='0,0 50,50'
                    markerStart="url(#dot)"
                    markerEnd='url(#dot2)'
                    stroke='#fff'
                    strokeWidth='2'>
  
          </polyline> */}

        </svg>
       
      </svg>
    </div>
  )
}

export default ActiveLine;