import React, { Component } from "react"; 

export default class Body extends Component {
    render() {
        return (
            <section className = "body">
                <img src={this.props.pizzaImg} />
                <p> 
                    For the fig-swirl: melt butter over      medium heat in a saucepan. Add brown Sugar and stir to dissolve. have all of
                    the figs and toss in the sausepan with water and lemon juice. cook over medium heat, stirring frequently, until
                    you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
                </p>
            
                <p>
                    Ice cream: in an small pot over medium heat. combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until
                    the fig mixture is cooled.
                </p>
                
                <p> 
                    Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer
                    instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture and the nuts.
                    Continue to process for +/- 10 minuties. Pour semi-frozen into a pyrex dish or glass tupperware. Freeze for at
                    least two hours before serving. 
                </p>
            </section> 
        )
    }
}