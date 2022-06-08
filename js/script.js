const flight = window.document.getElementById('flight-click')
const hotel = window.document.getElementById('hotel-click')
const rental = window.document.getElementById('rental-click')
const card_main = window.document.querySelector('div.card-main')

flight.addEventListener('click', click_flight)
hotel.addEventListener('click', click_hotel)
rental.addEventListener('click', click_rental)

function click_flight() {




    hotel.style.background = "black"
    rental.style.background = "black"
    flight.style.background = "rgb(254, 57, 57)"
    card_main.style.opacity = "0"





    setTimeout(wait, 130)
    function wait() {
        card_main.style.opacity = "1"




    }




    card_main.innerHTML = `
    <h1 id="title-main-form">Viage o mundo com a gente!</h1>


                    <div class="box-from-to">

                        <div class="card-main-from">
                            <h5>De</h5>
                            <input type="text" placeholder="Saindo de">
                        </div>

                        <div class="card-main-to">
                            <h5>Para</h5>
                            <input type="text" placeholder="Chegando até">

                        </div>

                    </div>

                    <div class="card-main-submit">
                        <button>Procure e ache datas</button>

                    </div>
    `


}

function click_hotel() {


    flight.style.background = "black"
    rental.style.background = "black"
    hotel.style.background = "rgb(254, 57, 57)"
    card_main.style.opacity = "0"

    setTimeout(wait, 130)
    function wait() {
        card_main.style.opacity = "1"

    }


    card_main.innerHTML = `

    
                    <div class="card-main-hotel-title">
                        <h1>
                            Hoteis disponíveis:
                        </h1>

                    </div>
                    <div class="card-main-hotel-flex">
                        <div class="card-main-hotel-box">
                            <img src="img/hotelimgs/hotel-atlantico.jpg" alt="" width="150px" height="150px">
                            
                                <h1>Hotel Atlântico</h1><img src="img/rating.png" width="70px" height="70px" alt="">
                            
                            <button>Selecionar</button>
                        </div>

                        <div class="card-main-hotel-box">
                           
                            <img src="img/hotelimgs/hotel-atlantico.jpg" alt="" width="150px" height="150px">
                            
                                <h1>Hotel Atlântico</h1><img src="img/rating.png" width="70px" height="70px" alt="">
                            
                            <button>Selecionar</button>
                       
                        </div>

                        <div class="card-main-hotel-box">
                            <img src="img/hotelimgs/hotel-atlantico.jpg" alt="" width="150px" height="150px">
                            
                                <h1>Hotel Atlântico</h1><img src="img/rating.png" width="70px" height="70px" alt="">
                            
                            <button>Selecionar</button>
                        </div>

                        <div class="card-main-hotel-box">
                            <img src="img/hotelimgs/hotel-atlantico.jpg" alt="" width="150px" height="150px">
                            
                                <h1>Hotel Atlântico</h1><img src="img/rating.png" width="70px" height="70px" alt="">
                            
                            <button>Selecionar</button>
                        </div>

                    
    
    `

}

function click_rental() {

    flight.style.background = "black"
    rental.style.background = "rgb(254, 57, 57)"
    hotel.style.background = "black"

}

