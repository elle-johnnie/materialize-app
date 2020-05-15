import React from 'react'

function Buttons() {
    return (
        <div className="container demo-container">
            <h4>So Many Buttons</h4>
            <a href="#!" class="btn light-blue waves-effect waves-light">Normal button</a>
            <a href="#!" class="btn-small orange">Small button</a>
            <a href="#!" class="btn-large">Large button</a>
            <a href="#!" class="btn indigo waves-effect waves-light">Indigo button</a>
            <a href="#!" class="btn disabled">Disabled button</a>
            <h4>Floating button</h4>
            <a href="#!" class="btn-floating pulse cyan"></a>
            <h4>Other elements</h4>
            <div class="btn purple">I am a div tag</div>   
        </div>
    )
}

export default Buttons
