const ControlButtons = ({ current, setCurrent, setLast, setLastIsEmpty }) => {
     const controlButtons = ['AC', 'Del'];
     return (
          <div className="control-buttons">
               {controlButtons.map((controlButton) => {
                    return (
                         <button
                              key={controlButton}
                              className="button"
                              onClick={() => {
                                   if (controlButton === 'AC') {
                                        setCurrent('0');
                                        setLast('0');
                                        setLastIsEmpty(true);
                                   } else {
                                        if (current.slice(0, -1) === '') {
                                             setCurrent('0');
                                        } else {
                                             setCurrent(current.slice(0, -1));
                                        }
                                   }
                              }}
                         >
                              {controlButton}
                         </button>
                    );
               })}
          </div>
     );
};

export default ControlButtons;
