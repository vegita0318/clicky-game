import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Apocalypse',
        img: 'img/apocalypse.png',
        clicked: false
    },
    {
        name: 'Captain America',
        img: 'img/captain-america.png',
        clicked: false
    },
    {
        name: 'Cyclops',
        img: 'img/cyclops.png',
        clicked: false
    },
    {
        name: 'Dr. Doom',
        img: 'img/dr-doom.png',
        clicked: false
    },
    {
        name: 'Gambit',
        img: 'img/gambit.png',
        clicked: false
    },
    {
        name: 'Hela',
        img: 'img/hela.png',
        clicked: false
    },
    {
        name: 'The Hulk',
        img: 'img/hulk.png',
        clicked: false
    },
    {
        name: 'Iron Man',
        img: 'img/ironman.png',
        clicked: false
    },
    {
        name: 'Jean Grey',
        img: 'img/jean-grey.png',
        clicked: false
    },
    {
        name: 'Magneto',
        img: 'img/magneto.png',
        clicked: false
    },
    {
        name: 'Miss Marvel',
        img: 'img/miss-marvel.png',
        clicked: false
    },
    {
        name: 'Rogue',
        img: 'img/rogue.png',
        clicked: false
    },
    {
        name: 'Scarlet Witch',
        img: 'img/scarlet-witch.png',
        clicked: false
    },
    {
        name: 'Thanos',
        img: 'img/thanos.png',
        clicked: false
    },
    {
        name: 'Wolverine',
        img: 'img/wolverine.png',
        clicked: false
    }
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every Marvel Character once. Once you click a hero/villian the grid will shuffle.<br/>Try not to click the same Marvel Character twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}