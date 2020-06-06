import React from "react";

const InfoCard = ({ description, amount, date }) => {
  return (
    <div className="card">
      <p>{description}</p>
      <p>${amount}</p>
      <p>{date}</p>
    </div>
  );
};

export default InfoCard;
