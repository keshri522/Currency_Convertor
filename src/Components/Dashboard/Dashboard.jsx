// import React, { useState } from "react";
// // this is the dashboard of the My application
// const Dashboard = () => {
//   const [originalAmount, setOriginalAmount] = useState(""); // by defauLT I AMS SHOWING A CURRENCY
//   const [fromCurrency, setFromCurrency] = useState(""); // based on onchange i will add the value on this state later make a api call
//   const [toCurrency, setToCurrency] = useState(""); // based on the state we will select to convert on which currency i want to convert
//   const [convertedAmount, setConvertedAmount] = useState(""); // here once convert the wresult will added to this state
//   // this function clear all the values that has store previously
//   const clearValues = () => {
//     setOriginalAmount("");
//     setFromCurrency("");
//     setToCurrency("");
//     setConvertedAmount("");
//   };

//   const convertCurrency = () => {
//     // You can implement the currency conversion logic here
//     // Update the convertedAmount state accordingly
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           <div className="col-md-12">
//             <h1 className="heading text-center display-2">
//               Currency Converter
//             </h1>
//           </div>
//         </div>
//       </div>
//       <hr />
//       {/* this is for the dropdown menu */}
//       <div className="container">
//         <div className="row box">
//           <div className="col-md-12">
//             <div className="form-group">
//               <label htmlFor="amount">Amount to Convert :</label>
//               <input
//                 type="text"
//                 className="form-control searchBox"
//                 placeholder="0.00"
//                 id="amount"
//                 value={originalAmount}
//                 onChange={(e) => setOriginalAmount(e.target.value)}
//               />
//             </div>

//             <div className="row d-flex justify-content-between">
//               <div className="col-md-6">
//                 <div className="input-group mb-3">
//                   <span className="input-group-text">From</span>

//                   <select
//                     className="form-control"
//                     value={fromCurrency}
//                     onChange={(e) => setFromCurrency(e.target.value)}
//                   >
//                     {/* Options for from currency */}
//                   </select>
//                 </div>
//               </div>

//               <div className="col-sm-6">
//                 <div className="input-group mb-3">
//                   <span className="input-group-text">To</span>

//                   <select
//                     className="form-control"
//                     value={toCurrency}
//                     onChange={(e) => setToCurrency(e.target.value)}
//                   >
//                     {/* Options for to currency */}
//                   </select>
//                 </div>
//               </div>
//             </div>

//             <div className="text-center">
//               <button
//                 className="btn btn-primary convert m-2"
//                 type="submit"
//                 onClick={convertCurrency}
//               >
//                 Convert
//               </button>

//               <button className="btn btn-primary m-2" onClick={clearValues}>
//                 Reset
//               </button>
//             </div>
//           </div>

//           <div id="finalAmount" className="text-center">
//             <h2>
//               Converted Amount :
//               <span className="finalValue" style={{ color: "green" }}>
//                 {convertedAmount}
//               </span>
//             </h2>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;

import React, { useState } from "react";

const Dashboard = () => {
  const [originalAmount, setOriginalAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [convertedAmount, setConvertedAmount] = useState("");

  const clearValues = () => {
    setOriginalAmount("");
    setFromCurrency("");
    setToCurrency("");
    setConvertedAmount("");
  };

  const convertCurrency = () => {
    // Implement your currency conversion logic here
    // Update the convertedAmount state accordingly
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="heading text-center display-2">
              Currency Converter
            </h1>
          </div>
        </div>
      </div>
      {/* for the horizontal line */}
      <hr className="text-primary" />
      <div className="container">
        <div className="row d-flex justify-content-center mt">
          <div className="col-md-8">
            <div className="form-group">
              <label className="labelClass mb-1" htmlFor="amount">
                Amount to Convert
              </label>
              <input
                type="text"
                className="form-control searchBox"
                placeholder="0.00"
                id="amount"
                value={originalAmount}
                onChange={(e) => setOriginalAmount(e.target.value)}
              />
            </div>

            <div className="row justify-content-between mt-3">
              <div className="col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text">From</span>
                  <select
                    className="form-select"
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                  >
                    {/* Options for from currency */}
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="input-group mb-3">
                  <span className="input-group-text">To</span>
                  <select
                    className="form-select"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                  >
                    {/* Options for to currency */}
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                className="btn btn-primary m-2 b"
                type="button"
                onClick={convertCurrency}
              >
                Convert
              </button>

              <button
                className="btn btn-danger m-2 b"
                type="button"
                onClick={clearValues}
              >
                Reset
              </button>
            </div>
          </div>
          {/* for the showing of result converted ammount */}
          {/* showing the div or the result conditonally based on the state */}
          {fromCurrency && originalAmount && toCurrency && convertedAmount ? (
            <div className="text-center mt-3">
              <h2>
                Converted Amount{" "}
                <span>
                  {originalAmount} {fromCurrency} ={convertedAmount}{" "}
                  {toCurrency}
                </span>
              </h2>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
