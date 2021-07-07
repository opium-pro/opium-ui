import { Box, Fit } from 'themeor';
import spot1path from './img/spot1.svg';
import spot2path from './img/spot2.svg';
import purple1path from './img/purple1.svg';
import purple2path from './img/purple2.svg';
import purple3path from './img/purple3.svg';
import random from '../_utils_/random';
var size = 930;
var spotList = [spot1path, spot2path];
var spotListPurple = [purple1path, purple2path, purple3path];
var stickList = ['left', 'right'];
var shiftList = [-size / 3, -size / 3, -size / 3, -size / 4, -size / 2, -size / 2];
var opacityList = [0.1, 0.4, 0.3, 0.2];
export function Spot(_a) {
    var reset = _a.reset, altSpotSet = _a.altSpotSet;
    var list = altSpotSet ? spotListPurple : spotList;
    var img = list[random(0, list.length - 1)];
    var stick;
    var shift = shiftList[random(0, shiftList.length - 1)];
    var opacity = opacityList[random(0, opacityList.length - 1)];
    if (!Spot.lastStick) {
        stick = stickList[random(0, 1)];
    }
    else {
        stick = stickList.filter(function (item) { return item !== Spot.lastStick; })[0];
    }
    Spot.lastStick = stick;
    if (!Spot.top || reset) {
        Spot.top = 1;
    }
    else {
        Spot.top += size / [1, 2, 2.5][random(0, 2)];
    }
    return (React.createElement(Fit.TryTagless, { FORCE_TAGLESS: true, width: size + "px", height: size + "px", left: stick === 'left' && shift + "px", right: stick === 'right' && shift + "px", top: Spot.top, stick: stick },
        React.createElement(Box, { img: img, style: { opacity: opacity } })));
}
