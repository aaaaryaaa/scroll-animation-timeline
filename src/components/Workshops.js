import React, { useEffect, useState } from "react";
import maskimg from '../images/Mask group.svg';
import neuralnetworks from '../images/neuralnetworks.png';
import TimelineCard from "./TimelineCard";

export default function Workshops() {
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    const maxTimelineHeight =
      (document.querySelectorAll(".my-container").length - 1) * 100;
    setTimelineHeight(maxTimelineHeight);
  }, []);

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / timelineHeight) * 65;
    const adjustedPercentage = Math.min(100, scrollPercentage);
    console.log(adjustedPercentage)
    document.querySelector(
      ".timeline-line"
    ).style.height = adjustedPercentage + "rem";
    document.querySelector(
      ".timeline-image"
    ).style.top = adjustedPercentage + "rem";

  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [timelineHeight]);

  return (
    <div>
      <div class="my-timeline">
        <div class="my-container left-container">
          <div className='lg:py-0 py-5 col-span-3 lg:col-start-1 col-start-3'><TimelineCard
            title="Neural Networks and Computer Vision"
            time="05:30PM - 08:00PM"
            date="4th January, 2024"
            image={neuralnetworks}
          // image="https://s3-alpha-sig.figma.com/img/d4f6/f766/62045705fb0b39ff404bb6484cd73c17?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BznrqdfAylnEo9ICeIsTBlLbHqkMq9LKdDNwfsnEjLQpUmZ57c7quBTou1SasojR72N5eT4brixzg2cK~4MGrMqN3gNJqZs85By6G7UBc2nVbWwZeo22v8qj4dQnIF4Vm6duK3C4AZZwHQnNHEABJLM7I4CWU4EpJhd7w7CKUFybSs8RvtSWTyPOIAK0ar2oyc6vtfmtpGGXVmmormT9FTjHIizYBJcQAd6WmEQaffOJUEZbb1NoTARMvZPWw7m-0PFrH8oLx0GJHcOBQtKgQ2BZIjDenEXplMrP7pF3pWek1AWuRmW2g2krLKXscV9IIJYcCdGRf7YQ0-J~c5bi7g__"
          /></div>
        </div>
        <div class="my-container right-container">

          <div class="text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              rerum! Non, laborum illum ea at ducimus, quia animi veniam, sapiente
              laudantium saepe magni aliquid dignissimos rerum quam placeat
              consectetur! Assumenda.
            </p>
          </div>
        </div>
        <div class="my-container left-container">

          <div class="text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              rerum! Non, laborum illum ea at ducimus, quia animi veniam, sapiente
              laudantium saepe magni aliquid dignissimos rerum quam placeat
              consectetur! Assumenda.
            </p>
          </div>
        </div>
        <div class="my-container right-container">


          <div class="text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              rerum! Non, laborum illum ea at ducimus, quia animi veniam, sapiente
              laudantium saepe magni aliquid dignissimos rerum quam placeat
              consectetur! Assumenda.
            </p>
          </div>
        </div>
        <div class="my-container left-container">

          <div class="text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              rerum! Non, laborum illum ea at ducimus, quia animi veniam, sapiente
              laudantium saepe magni aliquid dignissimos rerum quam placeat
              consectetur! Assumenda.
            </p>
          </div>
        </div>
        <div class="my-container right-container">

          <div class="text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              rerum! Non, laborum illum ea at ducimus, quia animi veniam, sapiente
              laudantium saepe magni aliquid dignissimos rerum quam placeat
              consectetur! Assumenda.
            </p>
          </div>
        </div>
        <div class="my-container left-container">

          <div class="text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              rerum! Non, laborum illum ea at ducimus, quia animi veniam, sapiente
              laudantium saepe magni aliquid dignissimos rerum quam placeat
              consectetur! Assumenda.
            </p>
          </div>
        </div>
        <div class="my-container right-container">

          <div class="text-box">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              rerum! Non, laborum illum ea at ducimus, quia animi veniam, sapiente
              laudantium saepe magni aliquid dignissimos rerum quam placeat
              consectetur! Assumenda.
            </p>
          </div>
        </div>
        <div class="timeline-line"></div>
        <img
          className="timeline-image"
          src={maskimg}
          alt=""
        />
      </div>
    </div>
  );
};




