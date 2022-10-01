import React from 'react';
import FlipCard  from './FlipCard';
import './card-container.css';
import './home-page.css'
import chandra from '../assets/chandra.jpeg';
import hubble from '../assets/hubble.jpeg';
import wise from '../assets/wise.jpeg';
import jamesWebb from '../assets/james-webb-icon.jpeg';
import hubbleMilky from '../assets/hubble-milky.jpeg';
import hubbleAndromeda from '../assets/hubble-andromeda.jpeg';
import chandraMilky from '../assets/chandra-milky.jpeg';
import chandraAndromeda from '../assets/chandra-andromeda.jpeg';
import wiseMilky from '../assets/wise-milky.jpeg';
import wiseAndromeda from '../assets/wise-andromeda.jpeg';
import jwMilky from '../assets/james-webb-milky.jpeg';
import jwAndromeda from '../assets/james-webb-andromeda.jpeg';

function CardContainer(){
    return(
        <div className='card-wrapper'>
            <div className="container">
                <div className="card-row-wrapper">
                    <div className="card">
                        <FlipCard
                            heading="James Webb" 
                            icon={jamesWebb}
                            src1={jwMilky}
                            src2={jwAndromeda}
                        />
                    </div>
                    <div className="card">
                        <FlipCard
                            heading="Chandra" 
                            icon={chandra}
                            src1={chandraMilky}
                            src2={chandraAndromeda}
                        />
                    </div>
                </div>
                <div className="card-row-wrapper">
                    <div className="card">
                        <FlipCard
                            heading="Wise" 
                            icon={wise}
                            src1={wiseMilky}
                            src2={wiseAndromeda}
                        />
                    </div>
                    <div className="card">
                        <FlipCard
                            heading="Hubble" 
                            icon={hubble}
                            src1={hubbleMilky}
                            src2={hubbleAndromeda}
                        />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CardContainer;