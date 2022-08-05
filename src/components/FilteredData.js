import React, { useEffect, useState } from "react";
import user from "../user.json";
import "./style.css";
function FilteredData({ filtter }) {
  const [mainData, setMainData] = useState(user);
  const [price, setPrice] = useState(500);
  const [date, setDate] = useState();
  const [brokerName, setBrokerName] = useState();
  const [minBed, setMinBed] = useState(1);
  const [newData, setNewData] = useState(user);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(price, date, brokerName, minBed);

    if (brokerName === undefined || date === undefined) {
      alert("Enter Date and Broker Name");
    } else {
      setNewData(
        mainData
          .filter((d) => d.unformattedPrice > price)
          .filter((a) => a.beds >= minBed)
          .filter((a) => a.brokerName === brokerName)
          .filter((t) => t.openHouseStartDate >= date)
      );
    }
  };

  useEffect(() => {
    filtter(newData);
  }, [newData]);

  return (
    <div className="search_form">
      <form type="submit">
        <div className="date">
          <h4>When :</h4>
          <input
            className="date_time"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <p>
            {!date && <p>Move In Date</p>}
            {date && date}
          </p>
        </div>

        <div className="price">
          <h4>Min Price:</h4>
          <input
            className="price_hover"
            value={price}
            type="range"
            min="500"
            step="1000"
            max="10000"
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>{price}</p>
        </div>

        <div className="broker">
          <h4>Broker: </h4>
          <input
            className="broker_hover"
            list="broker"
            value={brokerName}
            onChange={(e) => setBrokerName(e.target.value)}
          />
          <datalist id="broker">
            <option value="Compass" />
            <option value="City Real Estate" />
            <option value="Proof Real Estate" />
            <option value="Touchstone Commercial Partners" />
            <option value="Coldwell Banker Realty" />
            <option value="Corcoran Global Living" />
            <option value="Sotheby's International Realty" />
          </datalist>
        </div>

        <div className="bed">
          <h4>Minimum Bed: </h4>
          <input
            className="bed_input"
            list="bed"
            value={minBed}
            onChange={(e) => setMinBed(e.target.value)}
          />
          <datalist id="bed">
            <option value="1" />
            <option value="2" />
            <option value="3" />
          </datalist>
        </div>
        <button type="submit" className="btn_submit" onClick={handleClick}>
          Search
        </button>
      </form>
    </div>
  );
}

export default FilteredData;
