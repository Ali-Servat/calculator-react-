const Numbers = ({ current, setCurrent }) => {
     const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'];
     return (
          <div className="numbers">
               {numbers.map((number) => {
                    return (
                         <button
                              className="button"
                              onClick={() => {
                                   if (number === '.' && current.includes('.'))
                                        return;
                                   if (current === '0' && number === '.') {
                                        setCurrent((prev) => (prev += number));
                                   } else if (current === '0') {
                                        setCurrent(number);
                                   } else {
                                        setCurrent((prev) => (prev += number));
                                   }
                              }}
                         >
                              {number}
                         </button>
                    );
               })}
          </div>
     );
};

export default Numbers;
