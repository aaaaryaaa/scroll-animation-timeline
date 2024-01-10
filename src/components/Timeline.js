import neuralnetworks from '../images/neuralnetworks.png';
import reactworkshop from '../images/reactworkshop.png';
// import timelinetitle from '../images/timelinetitle.svg'
import { Button } from '@nextui-org/react';
import trophycup from '../images/trophycup.svg';
import TimelineCard from './TimelineCard';

function TimelineTitle() {
    return (
        <h1 className="h-[109px] text-center [text-shadow:0px_4px_25.1px_#ffffff80] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-3xl md:text-[69.9px] md:tracking-[6.99px] tracking-normal leading-[108.8px] md:leading-8 whitespace-nowrap">
            &lt;/timeline&gt;
        </h1>
    )
};

export default function Timeline() {
    return (
        <div className=''>
            <div className='absolute w-2 translate-y-[25rem] h-[70rem] bg-white'></div>
            <div className="lg:mx-96 mx-7 grid lg:grid-cols-3 grid-cols-2">
                <div className='mx-auto col-span-3 lg:col-start-1 col-start-2 lg:p-20 pb-7'>
                    {/* <img src={timelinetitle} alt="" /> */}
                    <TimelineTitle />
                </div>
                <div className='lg:py-0 py-5 col-span-3 lg:col-start-1 col-start-3'><TimelineCard
                    title="Neural Networks and Computer Vision"
                    time="05:30PM - 08:00PM"
                    date="4th January, 2024"
                    image={neuralnetworks}
                // image="https://s3-alpha-sig.figma.com/img/d4f6/f766/62045705fb0b39ff404bb6484cd73c17?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BznrqdfAylnEo9ICeIsTBlLbHqkMq9LKdDNwfsnEjLQpUmZ57c7quBTou1SasojR72N5eT4brixzg2cK~4MGrMqN3gNJqZs85By6G7UBc2nVbWwZeo22v8qj4dQnIF4Vm6duK3C4AZZwHQnNHEABJLM7I4CWU4EpJhd7w7CKUFybSs8RvtSWTyPOIAK0ar2oyc6vtfmtpGGXVmmormT9FTjHIizYBJcQAd6WmEQaffOJUEZbb1NoTARMvZPWw7m-0PFrH8oLx0GJHcOBQtKgQ2BZIjDenEXplMrP7pF3pWek1AWuRmW2g2krLKXscV9IIJYcCdGRf7YQ0-J~c5bi7g__"
                /></div>
                <div className='lg:py-0 py-5 col-span-3 col-start-3'><TimelineCard
                    title="React Workshop"
                    time="05:30PM - 08:00PM"
                    date="4th January, 2024 - 5th January, 2024"
                    image={reactworkshop}
                // image="https://s3-alpha-sig.figma.com/img/c82c/e689/2d216a7f430fec13ca8d4e780518bfa9?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bBQYmJpTRwjCCMqR1UDjZBqyg1j6tmfrse2tarI~VmoPrtnRK2Q8vP8X4WiIEeoewZXEFb50j2pjyBv7cSfB684at4QIJwhvlwOBrWFpvX8JoE1Wcgoy1P4NtyeCO3kp5YXG3awpL3UIOAmOQzZJUpHdR8kG~1mle5JqMcvMX9Z33W6rgPFy1eAvk81P-qKOiH5Irm1FghuZCoumdAs~~hIDA~jo--xLqqHTFTUeqH~opW9Q~LypsHMILjvSJN2bU4kaheIdirq2Ucnn1Rui2ZQBiqCriHoEfRmOmNubk~9g1kG1bIAr1djc84XfOi~6sGWYmIYB3QLedZjL0Ft6Ww__" 
                /></div>
                <div className='lg:py-0 py-5 col-span-3 lg:col-start-1 col-start-3'><TimelineCard
                    title="UI Design Workshop"
                    time="05:30PM - 08:00PM"
                    date="4th January, 2024"
                    image={reactworkshop}
                /></div>
                <div className='lg:py-0 py-5 col-span-3 col-start-3'><TimelineCard
                    title="CSS Frameworks"
                    time="05:30PM - 08:00PM"
                    date="4th January, 2024"
                    image={reactworkshop}
                /></div>
            </div>
            <div className='border-[#11A8E4] border-solid border-3 rounded-lg w-fit mx-auto m-10'>
                <div className='text-center text-white'>
                    <h4 className='p-5 text-[#11A8E4] font-semibold'>Unlock Your Potential, Elevate Your Skills, Ignite Your Passion!</h4>
                    <h4 className='p-5 font-bold'>Register Now for AURORA's Ultimate Experience!</h4>
                    <Button color="primary" size="lg" variant="shadow"
                        className="lg:w-[15rem] m-5"
                        onClick={()=>{console.log('clicked register')}}>
                        <img src={trophycup} alt="" />
                        Register Now!
                    </Button>
                </div>
            </div>
        </div>
    )
}
