import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
                width="340" height="100%"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        
    )
}

export default Widgets
