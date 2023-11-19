import React, { useEffect, useState } from "react";
import axios from "axios";
const Dashboard = () => {
  const [CountryCurrencyCode, SetCountryCurrencyCode] = useState([]); // for storing all the codes that will be shown in the options
  const [originalAmount, setOriginalAmount] = useState(""); // by defauLT I AMS SHOWING A CURRENCY
  const [fromCurrency, setFromCurrency] = useState("INR"); // based on onchange i will add the value on this state later make a api call
  const [toCurrency, setToCurrency] = useState(""); // based on the state we will select to convert on which currency i want to convert
  const [convertedAmount, setConvertedAmount] = useState(""); // here once convert the wresult will added to this state

  // this function will clear all the fields once user click on the reset button
  const clearValues = () => {
    setOriginalAmount("");
    // setFromCurrency("");
    setToCurrency("");
    setConvertedAmount("");
  };
  const convertCurrency = () => {
    // swapping the currency to each others
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };
  // creatng a api that will return all the current currency rates based on the states or input changes
  useEffect(() => {
    // usingg IMFE function to optimise the code to reduce time complexity
    (async () => {
      try {
        // calling a api function here
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );

        // console.log(response.data.rates); just for debugging
        // here the rates are coming in the key value pair so i need to extract all the key  or currency and store in some state to show in my select options
        const CountryCurrency = Object.keys(response.data.rates);
        SetCountryCurrencyCode(CountryCurrency);
        //from whome we want to exchange because in the response given an array we can use indexing to find
        const exchangeAmount = response.data.rates[toCurrency]; // based on the onchange events
        // now set the converted amount based on the number of amounts

        setConvertedAmount(originalAmount * exchangeAmount); // this will final amount based on the how much rates of the currency based on the numbers
        // console.log(CountryCurrency);
      } catch (error) {
        // console.log(error);
      }
    })();
  }, [originalAmount, fromCurrency, toCurrency]); // this will run based on the depedencyiess

  //   console.log(CountryCurrencyCode);
  //   console.log(fromCurrency, toCurrency); just for debugging

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
                placeholder="Enter amount to be converted"
                type="number"
                className="form-control searchBox mb-1 p-2"
                value={originalAmount}
                onChange={(e) => setOriginalAmount(e.target.value)}
                step="any" // Use "any" to allow any numeric input
              />
            </div>

            <div className="row justify-content-between mt-4">
              <div className="col-md-5">
                <div className="input-group  ">
                  <span className="input-group-text">From</span>
                  <select
                    className="form-select p-2 "
                    value={fromCurrency}
                    onChange={(e) => setFromCurrency(e.target.value)}
                  >
                    <option value="">From currency</option>
                    {/* showing all thecountrycode in the options using map function */}
                    {CountryCurrencyCode?.map((code, i) => (
                      <option key={i} value={code}>
                        {code}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-2 text-center">
                <button
                  className="text-white btn-success btn swap m-2 "
                  type="button"
                  onClick={convertCurrency}
                >
                  {/* this is swapping button of currency */}
                  <i class="fa-solid fa-right-left"></i>
                </button>
              </div>

              <div className="col-md-5">
                <div className="input-group ">
                  <span className="input-group-text">To</span>
                  <select
                    className="form-select p-2"
                    value={toCurrency}
                    onChange={(e) => setToCurrency(e.target.value)}
                  >
                    <option value="">To currency</option>
                    {/* shwowing all the currency code based onthe state of application coing from api */}
                    {CountryCurrencyCode?.map((code, i) => (
                      <option key={i} value={code}>
                        {code}
                      </option>
                    ))}
                    {/* this will show all the country code */}
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center mt-3">
              <button
                className="btn btn-danger m-2 b"
                type="button"
                onClick={clearValues}
                disabled={
                  fromCurrency.length === 0 ||
                  toCurrency.length === 0 ||
                  originalAmount.length === 0
                }
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
