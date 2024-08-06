import React, {ReactNode} from 'react';
import { useTrail, a, SpringValue } from 'react-spring';
import "../Trail/style.css"


interface TrailProps {
    open: boolean;
    children: ReactNode;
  }
  
  const Trail: React.FC<TrailProps> = ({ open, children }) => {
    const items = React.Children.toArray(children);
  
    interface TrailStyle {
      height?: SpringValue<number>;
      opacity?: SpringValue<number>;
      x?: SpringValue<number>;
    }
  
    const trail = useTrail(items.length, {
      config: { mass: 20, tension: 1000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height: open ? 160 : 0,
      from: { opacity: 0, x: 20, height: 0 },
    });
  
    return (
      <div>
        {trail.map(({ height }: TrailStyle, index) => (
          <a.div key={index} className="trail">
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    );
  };
  
  export default Trail;