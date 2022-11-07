import React, { Component } from 'react'
import './Model.scss'

const data = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "url": "./glassesImage/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "url": "./glassesImage/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "url": "./glassesImage/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "url": "./glassesImage/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "url": "./glassesImage/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "url": "./glassesImage/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "url": "./glassesImage/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "url": "./glassesImage/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]

export default class Model extends Component {

    state = {
        glass: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    renderGlassesList = () => {
        const arrGlasses = data.map((item, index) => {
            return <div className='image' key={index} onClick={() => {
                this.changeGlass(item);
            }}><img src={item.url} alt="Glass" /></div>
        })
        return arrGlasses;
    }

    changeGlass = (glass) => {
        this.setState({
            glass: glass
        })
    }

    render() {
        const { id, price, name, url, desc } = this.state.glass;

        return (
            <div className='model-container'>
                <div className='main-row'>
                    <div className='item'>
                        <div className='img__model'>
                            <img src="./glassesImage/model.jpg" alt="" />
                            <img className='glasses' src={url} alt="" />
                        </div>
                        <div className='model__content'>
                            <h3>{name}</h3>
                            <p>{desc}</p>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='img__model'>
                            <img src="./glassesImage/model.jpg" alt="" />
                            <img className='glasses' src={url} alt="" />
                        </div>
                    </div>
                </div>
                <div className='products'>
                    <div className='glass-container row'>
                        {this.renderGlassesList()}
                    </div>
                </div>
            </div>
        )
    }
}
