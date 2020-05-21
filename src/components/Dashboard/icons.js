import React from 'react'

function Icons() {
    return (
        <div className="container demo-container">
            <h4>Iconic Icons</h4>
            <i class="material-icons red-text">error</i>
            <i class="material-icons yellow-text text-darken-2">warning</i>
            <i class="material-icons grey-text">cloud</i>
            <i class="material-icons light-blue-text">folder</i>
            <h4>Icons on Buttons</h4>
            <a href="#!" class="btn indigo">
            <span>Send</span>
            <i class="material-icons right">send</i>
            </a>
            <a href="#!" class="btn pink waves-effect waves-light">
            <span>Email</span>
            <i class="material-icons left">email</i>
            </a>
            <h4>Icons on Floating Buttons</h4>
            <a href="#!" class="btn-floating light-blue pulse">
            <i class="material-icons">add</i>
            </a>
            <a href="#!" class="btn-floating red pulse">
            <i class="material-icons">remove</i>
            </a>
            <a href="#!" class="btn-floating orange pulse">
            <i class="material-icons">edit</i>
            </a>
        </div> 
    )
}

export default Icons
