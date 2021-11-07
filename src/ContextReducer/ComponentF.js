import React, { useContext } from 'react';
import { countContext } from '../AppContxtRed';

function ComponentF() {
  const context = useContext(countContext);

  console.log(context);
  // let dispatch = context.countDispatch;
  const { countState: count, countDispatch: dispatch } = context;

  return (
    <div>
      {/* The state is {state} */}
      Component F
      Count: {count}
      <div className="mt-5"><button onClick={() => dispatch('increment')}>INCREMENT</button></div>
      <div className="mt-5"><button onClick={() => dispatch('decrement')}>DECREMENT</button></div>
      <div className="mt-5"><button onClick={() => dispatch('reset')}>RESET</button></div>
      <hr style={{ fontWeight: "6px", width: "440px" }} />

    </div>
  );
}

export default ComponentF;
