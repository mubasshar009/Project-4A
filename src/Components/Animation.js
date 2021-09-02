import useWebAnimations from "@wellyshen/use-web-animations";
import alice from '../images/alice-hungry_colors.png'
import ponyHair from '../images/alice-hungry-ponytail.png'
import table from '../images/table.png'
import drinkMe from '../images/drink-me_fg_small.png'
import bottle_b from '../images/doily_small.png';
import eatMe from '../images/sprite_cupcake_small.png'
import { useState } from "react";
const Animation = () => {
    const [cake, setCake] = useState(false);
    const [timeState, setTimeState] = useState();
    const { ref: aliceRef, getAnimation: getAnimationforAlice } = useWebAnimations({
        id: 'alice-tot',
        autoPlay: false,
        keyframes:
            [{ transform: 'translate(-50%, -50%) scale(.5)' },
            { transform: 'translate(-50%, -50%) scale(2)' }]
        ,
        animationOptions: {

            duration: 8000,
            easing: 'ease-in-out',
            fill: 'both'
        }
    })

    const { ref: cakeRef, getAnimation: getAnimationforCake } = useWebAnimations({
        autoPlay: false,
        keyframes: { transform: ['translateY(-100%)'] },
        animationOptions: {
            duration: 400,
            easing: 'steps(5, end)',
            direction: 'reverse',
            iterations: Infinity,
            playbackRate: 1,
        },
    })
    const AliceChange = () => {

    }
    const eatMeChange = () => {
        const animation = getAnimationforCake;
        console.log(animation)
        setTimeState(animation.effect.getTiming().duration / 2);

        animation.pause();

        // if (setCake) {
        //     animation.pause();

        // } else {
        //     animation.play()
        //     setCake(true);
        // }

    }

    return (
        <div className="main">
            <div ref={aliceRef} className="alice" id="alice-tot">
                <img id="alice-skelton" src={alice} alt="" />
                <img id="hair" src={ponyHair} alt="" />
            </div>
            <div className="forground">
                <div className="table">
                    <img id="table-ad" src={table} alt="" />
                </div>
                <div className="drinkme">
                    <img src={drinkMe} id="drinkMe" alt="" />
                    <img src={bottle_b} id="bottle_b" alt="" />

                </div>
                <div className="eat_me">
                    <img ref={cakeRef} src={eatMe} id="eatMe" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Animation
