import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import beastsData from './data.json';


class Main extends Component {
    render() {
        return (
            <div>
                {
                    beastsData.map((beast, ind) => {
                        return <HornedBeasts clicks={0} title={beast.title} image_url={beast.image_url} description={beast.description} />
                    })
                }



            </div>
        )
    }
}
export default Main