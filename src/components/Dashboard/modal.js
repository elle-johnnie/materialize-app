import React from 'react'

function Modal() {
    return (
        <div class="container demo-container">
            <h2>Oh My Modal</h2>

            <a class="btn orange modal-trigger" href="#terms">Terms & Conditions</a>

            <div id="terms" class="modal">
            <div class="modal-content">
                <h4>Terms & Conditions</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae finibus mi, egestas dignissim metus. Fusce tempus elementum metus. Donec eu nibh fringilla, dignissim arcu eu, ultrices ante. Cras consectetur risus id mi condimentum aliquam.</p>
            </div>
            <div class="modal-footer">
                <a href="#!" class="modal-close btn orange">Agree</a>
            </div>
            </div>

        </div>
    )
}

export default Modal
