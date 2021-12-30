import { useState } from 'react';

const Operators = ({
     current,
     last,
     setCurrent,
     setLast,
     lastIsEmpty,
     setLastIsEmpty,
}) => {
     const [currentOperator, setCurrentOperator] = useState('');
     const operators = ['/', '*', '-', '+', '='];
     return (
          <div className="operators">
               {operators.map((operator) => {
                    return (
                         <button
                              className="button"
                              onClick={() => {
                                   if (operator === '=') {
                                        setCurrent(
                                             calculate(
                                                  currentOperator,
                                                  last,
                                                  current
                                             ).toString()
                                        );
                                        setLast('0');
                                        setLastIsEmpty(true);
                                        setCurrentOperator('');
                                   } else {
                                        if (lastIsEmpty) {
                                             setCurrentOperator(operator);
                                             setLast(current);
                                             setCurrent('0');
                                             setLastIsEmpty(false);
                                        } else {
                                             setCurrentOperator(operator);
                                             setLast(
                                                  calculate(
                                                       currentOperator,
                                                       last,
                                                       current
                                                  )
                                             );
                                             setCurrent('0');
                                        }
                                   }
                              }}
                         >
                              {operator}
                         </button>
                    );
               })}
          </div>
     );
};

function calculate(operator, last, current) {
     current = Number(current);
     last = Number(last);
     let result;

     switch (operator) {
          case '+':
               result = last + current;
               break;
          case '-':
               result = last - current;
               break;
          case '*':
               result = last * current;
               break;
          case '/':
               result = last / current;
               break;

          default:
               break;
     }
     return result;
}

export default Operators;
