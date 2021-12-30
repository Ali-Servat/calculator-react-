const DisplayBox = ({ last, current }) => {
     return (
          <div className="display-box">
               <p className="current">{current}</p>
               <p className="last">{last}</p>
          </div>
     );
};

export default DisplayBox;
