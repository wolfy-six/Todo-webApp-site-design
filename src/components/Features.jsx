import React from "react";
import styles from "../styles";
import { EyaseToUse } from "../constance";

const FeaturesCard = ({ img, precentage, title, subText }) => (
  <div className="h-full w-full px-6 py-3 mt-10 sm:mt-0">
    <div
      className={`w-[70px] h-[70px] p-2 bg-white rounded-full ${styles.flexCenter}`}
    >
      <img src={img} alt="" className="w-[64px] " />
    </div>

    <div className={`w-full bg-primary h-[3px] my-3`} />

    <h3 className="text-xl font-bold py-2">{title}</h3>
    <p className={`${styles.paragraph} font-thin`}>
      {subText} {precentage}
    </p>
  </div>
);

const Features = () => {
  return (
    <section className={`flex flex-row md:${styles.padding}`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        {EyaseToUse.map((props) => (
          <FeaturesCard
            img={props.icon}
            precentage={props.presentage}
            title={props.title}
            subText={props.subText}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
