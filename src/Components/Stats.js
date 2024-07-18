// import React, { useState } from 'react';

// export default function Stats() {
//   const [count, setCount] = useState(0);
//   const increment = () => {
//     console.log('is it working?');
//     setCount((count) => count + 1);
//   };

//   return (
//     <>
//       <h1>Outfit Changes</h1>
//       <h2>
//         You have changed your face {count} times. You have changed your shirt {count} times. You
//         have changed your bottoms {count} times.
//       </h2>
//     </>
//   );
// }
import React from 'react';

const Stats = ({ input }) => {
  return (
    <div>
      <ul>
        {input.map((phrase) => (
          <li key={phrase} value={phrase}>
            {phrase}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
