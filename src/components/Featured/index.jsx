import React from 'react'
import './Featured.scss'
export default function Featured() {
  return (
    <section id="featured">
            <div class="title">
                <h1>OUR BEST SELLER</h1>
                <h2>CHATEAU DE MALIGNY CHABLIS PREMIER CRU 'FOURCHAUME' 2018</h2>
                <p>The 2018 Jean Durup & Fils Chateau de Maligny Chablis Fourchaume Premier Cru is a round, supple wine
                    with a good structure typical of Premier Crus. Its roundness and flexibility will allow you to enjoy
                    it now. In the case of a Chablis Premier Cru, however, it will gain by aging a few years to express
                    itself at its true value. </p>
            </div>
            <div class="img-wrapper">
                <img src="./public/img/wine-bottles/Rxg_HyC7Qf2KR7kN--iyRA_pb_x600.png" alt="" srcset=""/>
            </div>
            <div class="menu-wrapper">
                <ul>
                    <li id="button1" class="button-tooltip">
                        <span>SEC</span>
                        <div id="tooltip" class="hide-tooltip" role="tooltip">Dry wine</div>
                    </li>
                    <li id="button2" class="button-tooltip">
                        <span>ALB</span>
                        <div id="tooltip" class="hide-tooltip" role="tooltip">Alvarinho</div>
                    </li>
                    <li id="button3" class="button-tooltip">
                        <span>12.5%</span>
                        <div id="tooltip" class="hide-tooltip" role="tooltip">Alcohol volume</div>
                    </li>
                    <li id="button4" class="button-tooltip">
                        <span>750ml</span>
                        <div id="tooltip" class="hide-tooltip" role="tooltip">How many ml are in</div>
                    </li>
                    <li id="button5" class="button-tooltip">
                        <span>Italy</span>
                        <div id="tooltip" class="hide-tooltip" role="tooltip">Made in</div>
                    </li>
                </ul>
            </div>
            

        </section>
  )
}
