import React from 'react';
import './ActiveLine.scss';

const ActiveLine = ({coords}) => {
  const bigSvgRef = React.useRef(null);
  const [endPointCoords, setEndPointCoords] = React.useState({x: 0, y: 0});
  const [startPointCoords, setStartPointCoords] = React.useState({x: 500, y: 500});


  React.useEffect(()=> {
    const updateEndPointsCoord = () => {
      setEndPointCoords({x: bigSvgRef.current.clientWidth, y: bigSvgRef.current.clientHeight});
    }

    updateEndPointsCoord();

     const updateStartPointCoord = () => {
       setStartPointCoords(coords && coords.current 
        ? {x: (bigSvgRef.current.clientWidth/3*2), y: (coords.current.offsetTop+20)} 
        : {x: 500, y: 500}) 
    }
    updateStartPointCoord();

    window.addEventListener('resize', updateStartPointCoord);
    window.addEventListener('resize', updateEndPointsCoord);
  },[coords])
  



  return (
    <div className='activeline'>
      <svg id='bigSVG' ref={bigSvgRef}>

        <defs>
          <marker
            id="dot"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="5"
            markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="white" />
          </marker>

          <marker
            id="dot2"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="5"
            markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="#ffffff">  </circle>
          </marker>
        </defs>

        <polyline points={`${endPointCoords.x},${endPointCoords.y} ${startPointCoords.x},${startPointCoords.y}`}
                  markerStart="url(#dot)"
                  markerEnd='url(#dot2)'
                  stroke='#fff'
                  strokeWidth='2'
                  id='line'>
        </polyline> 
      </svg>
    </div>
  )
}

export default ActiveLine;