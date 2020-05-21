import React from 'react'

function Cards() {
    return (
        <div class="container demo-container">
            <h2>Justa Coupla Cards</h2>
            <div class="row">
                <div class="col s12 l6">
                    <div class="card">
                    <div class="card-image">
                        <img src="images/mango-curry.jpg" alt="plate of curry on rice"/>
                        <a href="#!" class="halfway-fab btn-floating pink pulse">
                        <i class="material-icons">favorite</i>
                        </a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">Mango & Chickpea Curry</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                    </div>
                    <div class="card-action">
                        <a href="#!">More details</a>
                        <a href="#!">View Ingredients</a>
                    </div>
                </div>
            </div>
      <div class="col s12 l6">
        <div class="card">
          <div class="card-image">
            <img src="images/pasta.jpg" alt="plate of pasta with red sauce" />
            <a href="#!" class="halfway-fab btn-floating pink pulse">
              <i class="material-icons">favorite</i>
            </a>
          </div>
          <div class="card-content">
            <span class="card-title">Rainbow Pasta Salad</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis aliquam orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
          <div class="card-action">
            <a href="#!">More details</a>
            <a href="#!">View Ingredients</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Cards
