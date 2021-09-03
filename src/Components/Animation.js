import useWebAnimations from "@wellyshen/use-web-animations";
import ali from '../images/alice-hungry_colors.png'
import ponyHair from '../images/alice-hungry-ponytail.png'
import table from '../images/table.png'
import drinkMe from '../images/drink-me_fg_small.png'
import bottle_b from '../images/doily_small.png';
import eatMe from '../images/sprite_cupcake_small.png'
import { useState, useEffect } from "react";
const Animation = () => {
    const [cake, setCake] = useState('');
    const [alice, setAlice] = useState(true);
    const { ref: aliceRef, getAnimation: getAnimationforAlice } = useWebAnimations({
        id: 'alice-tot',
        autoPlay: false,
        keyframes:
            { transform: ['translate(-50%, -50%) scale(.5)', 'translate(-50%, -50%) scale(2)'] }
        ,
        animationOptions:
        {
            direction: 'normal',
            duration: 18000,
            iterations: Infinity,
        }
        ,

        onReady: ({ animation }) => animation.currentTime = animation.effect.getTiming().duration / 2,
        //onUpdate: ({ animation }) => console.log((animation.timeline.currentTime))

    })

    const { ref: cakeRef, getAnimation: getAnimationforCake } = useWebAnimations({
        autoPlay: false,
        id: 'eatMe',
        keyframes: { transform: ['translateY(-100%)'] },
        animationOptions: {
            duration: 5000,
            easing: 'steps(5, end)',


            playbackRate: 5,
        },
        onReady: ({ animation }) => (animation.currentTime = animation.effect.getTiming().duration),
    })
    const { ref: liquid, getAnimation: getAnimationforLiquid } = useWebAnimations({
        autoPlay: false,
        id: 'liquid',
        keyframes: [
            { height: '100%' },
            { height: '0%' }
        ],
        animationOptions: {
            fill: 'forwards',
            duration: 9000,
            iterations: Infinity
        },
        onReady: ({ animation }) => (animation.currentTime = animation.effect.getTiming().duration / 2),
    })
    const AliceChange = () => {

    }
    const eatMeChange = () => {
        //Grow Alice
        setTimeout(() => getAnimationforAlice().playbackRate = 1, 1)
        setTimeout(() => getAnimationforAlice().play(), 200)
        setTimeout(() => getAnimationforAlice().pause(), 500)

        if (getAnimationforAlice().currentTime > 12000) {
            alert("Poor Alice Has Been Died")
        }
        //Cake Animation
        setTimeout(() => getAnimationforCake().play(), 400);
        setTimeout(() => getAnimationforCake().pause(), 1000);
    }
    const handleliquid = () => {
        //Shrink Alice
        setTimeout(() => getAnimationforAlice().playbackRate = -1, 1)
        setTimeout(() => getAnimationforAlice().play(), 20)
        setTimeout(() => getAnimationforAlice().pause(), 900)
        //Animation For Liquid

        setTimeout(() => getAnimationforLiquid().updatePlaybackRate *= 2)
        setTimeout(() => getAnimationforLiquid().play(), 20);
        setTimeout(() => getAnimationforLiquid().pause(), 400);

        //Time
        if (getAnimationforLiquid().currentTime > 8600) {
            alert("Poor Alice Dies")
        }
    }


    console.log(cake);
    return (


        <div className="main">
            <div ref={aliceRef} className="alice" onClick={AliceChange} id="alice-tot">
                <img id="alice-skelton" src={ali} alt="" />
                <img id="hair" src={ponyHair} alt="" />
            </div>
            <div className="forground">
                <div className="table">
                    <img id="table-ad" src={table} alt="" />
                </div>
                <div className="drinkme" onClick={handleliquid}>
                    <img src={drinkMe} id="drinkMe" alt="" />
                    <div ref={liquid} id="liquid" ></div>
                    <img src={bottle_b} id="bottle_b" alt="" />

                </div>
                <div className="eat_me">
                    <img ref={cakeRef} onClick={eatMeChange} src={eatMe} id="eatMe" alt="" />
                </div>
            </div>
        </div>

    )
}

export default Animation
