import React from 'react'

function Shadows() {
    return (
        <div class="container demo-container">
            <h4>Shadowy Depths</h4>
            <div class="row">
                <div class="col s2 ">
                <div class="shadow-example">no depth</div>
                </div>
                <div class="col s2 shadow-example">
                    <div class="z-depth-1 shadow-example">1</div>
                </div>
                <div class="col s2 shadow-example">
                    <div class="z-depth-2 shadow-example">2</div>
                </div>
                <div class="col s2 shadow-example">
                    <div class="z-depth-3 shadow-example">3</div>
                </div>
                <div class="col s2 shadow-example">
                    <div class="z-depth-4 shadow-example">4</div>
                </div>
                <div class="col s2 shadow-example">
                    <div class="z-depth-5 shadow-example">5</div>
                </div>
            </div>
        </div>
    )
}

export default Shadows
