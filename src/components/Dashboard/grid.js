import React from 'react'

function Grid() {
    return (
        <div className="container demo-container">
            <h4>Grids: Resize screen to see changes to grid</h4>
            <h5>Standard 12 column grid</h5>
            <div class="row">
                <div class="col s1 grid-example">1</div>
                <div class="col s1 grid-example">2</div>
                <div class="col s1 grid-example">3</div>
                <div class="col s1 grid-example">4</div>
                <div class="col s1 grid-example">5</div>
                <div class="col s1 grid-example">6</div>
                <div class="col s1 grid-example">7</div>
                <div class="col s1 grid-example">8</div>
                <div class="col s1 grid-example">9</div>
                <div class="col s1 grid-example">10</div>
                <div class="col s1 grid-example">11</div>
                <div class="col s1 grid-example">12</div>
            </div>

            <div class="row">
                <div class="col s3 grid-example">col s3</div>
                <div class="col s3 grid-example">col s3</div>
                <div class="col s3 grid-example">col s3</div>
                <div class="col s3 grid-example">col s3</div>
            </div>

            <div class="row">
                <div class="col s6 m3 grid-example">s6 m3</div>
                <div class="col s6 m3 grid-example">s6 m3</div>
                <div class="col s6 m3 grid-example">s6 m3</div>
                <div class="col s6 m3 grid-example">s6 m3</div>
            </div>

            <div class="row">
                <div class="col s12 m6 l4 xl2 grid-example">s12 m6 l4 xl2</div>
                <div class="col s12 m6 l4 xl2 grid-example">s12 m6 l4 xl2</div>
                <div class="col s12 m6 l4 xl2 grid-example">s12 m6 l4 xl2</div>
                <div class="col s12 m6 l4 xl2 grid-example">s12 m6 l4 xl2</div>
                <div class="col s12 m6 l4 xl2 grid-example">s12 m6 l4 xl2</div>
                <div class="col s12 m6 l4 xl2 grid-example">s12 m6 l4 xl2</div>
            </div>

            <div class="row">
                <div class="col s12 m8 grid-example">s12 m8</div>
                <div class="col s12 m4 grid-example">s12 m4</div>
                <div class="col s12 m4 grid-example">s12 m4</div>
                <div class="col s12 m8 grid-example">s12 m8</div>
            </div>
                
        </div>
    )
}

export default Grid
