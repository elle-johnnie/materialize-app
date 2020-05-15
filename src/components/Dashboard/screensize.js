import React from 'react'

function ScreenSize() {
    return (
        <div className="container demo-container">
            <h1>Heyo! Here are hide by screen sizes:</h1>
            <h4 class="hide">Hide me on all screen sizes</h4>
            <h4 class="hide-on-small-only">Hide me on small screen sizes</h4>
            <h4 class="hide-on-med-only">Hide me on medium screen sizes</h4>
            <h4 class="hide-on-large-only">Hide me on large screen sizes</h4>
            <h4 class="hide-on-med-and-down">Hide me on medium & small screen sizes</h4>
            <h4 class="hide-on-med-and-up">Hide me on medium and large screen sizes</h4>
            <h4 class="show-only-on-small">Only show me on small screens</h4>  
        </div>
    )
}

export default ScreenSize
