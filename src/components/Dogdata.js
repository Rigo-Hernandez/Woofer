import React from 'react';
import pf from 'petfinder-client'
import '../index.css'
import { Card, CardWrapper } from 'react-swipeable-cards';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
// import { Divider } from '@material-ui/core';


const petfinder = pf({
    key: '2ecbf7e62395bf59b779dcb29b331c33',
    secret: '5014f277cf09d7159c1d2c70bd4f849b'
})

class Dogdata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dogs: []
        }
    }


    componentDidMount() {
        petfinder.pet.find({ find: "full", animal: 'dog', location: "77026" })
            .then(data => {
                // console.log(data.petfinder.pets.pet)
                this.setState({
                    dogs: data.petfinder.pets.pet,
                });
            })
    }

    onDoubleTap() {
        let data = this.state.dogs;
        return (
            alert(data.name)
        )
    }

    onSwipeRight(data) {
        console.log("I was swiped right.");
    }
    

    renderCards() {
        let data = this.state.dogs;
        console.log(data)
        return data.map((d) => {
            return (
                <Card
                    key={d.id}
                    data={d}
                    onDoubleTap={this.onDoubleTap.bind(this)}
                >
                    <div>
                        <h2 className='dogheader' >{d.name}, {d.age}</h2>
                        <h4 className='dogsubheader'>{d.breeds.breed[0]}</h4>
                        <h4 className='dogsubheader'>{d.contact.city}, {d.contact.state}</h4>
                        <img className='dogphoto' src={d.media.photos.photo[2].value} alt='adopt this dog'></img>
                        <Button className= 'button' variant="contained" color="secondary" >Primary</Button>
                        <span> &nbsp; &nbsp;</span>
                        <Button className= 'button'  variant="contained" color="primary" >Primary</Button>
                    </div>
                </Card>
            );

        });
    }

    render() {
        return (
            <CardWrapper>
                {this.renderCards()}
            </CardWrapper>
        );
    }

}


Dogdata.propTypes = {

};

export default Dogdata

