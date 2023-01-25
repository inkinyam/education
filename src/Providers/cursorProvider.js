import React from "react";
import cx from "classnames";
export const CursorContext = React.createContext("cursorContext");

const SUPPORTED_CURSORS = [false, 'big', 'more', 'pensil', 'hide', 'play'];



const CursorProvider = ({children}) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y : 0 });
  const [cursor, setCursor] = React.useState(false);


  const onMouseMove = (evt) => {
    const { pageX: x, pageY: y} = evt;
    setMousePosition({ x, y});
  }

  const onHideCursor = () => {
    setMousePosition({x: 10, y: 10})
    setCursor('hide')
  }
  
  React.useEffect (() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onHideCursor)
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseleave', onHideCursor)
    }
  }, [])

  const { x, y } = mousePosition;

  const onCursor = cursorType => {
    cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
  }




  return (
    <CursorContext.Provider value={{ onCursor }}>
    <div className = {cx('cursor', {[`cursor-${cursor}`]: !! cursor })}
         style={{
           left: `${x}px`,
           top: `${y}px`
         }}/>

      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
  
