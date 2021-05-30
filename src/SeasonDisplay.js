import './SeasonDisplay.css';
import React from 'react'

const seasonConfig = {
     
    summer: {
        textToDisplay: 'It is Summer, we shall go to the BEACH !',
        iconName: 'sun'
    },
    winter: {
        textToDisplay: 'Burr, it is winter...',
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
     if(month > 2 && month < 9) {
         return lat > 0 ? 'summer' : 'winter';
     } else {
         return lat > 0 ? 'winter' : 'summer';
     }
};
 
 const SeasonDisplay = (props) => {
     
    const season = getSeason(props.lat, new Date().getMonth());

    const { textToDisplay, iconName } = seasonConfig[season];
    

     return (
         <div className={`season-display ${season}`}>
             <i className={` icon-left massive ${iconName} icon`} />
             <h1>{textToDisplay} </h1> 
             <i className={` icon-right massive ${iconName} icon`} />
         </div>
     );
 };
 
 export default SeasonDisplay
 