import React, { Component } from 'react'
import data from "./../data.json";

export default class BaitapList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listMovie: data
        };
    }
    renderListcard = () => {
        const { listMovie } = this.state;
        return listMovie.map((movie) => {
            return (
                <div className="col-sm-4 mb-4">
                    <div className="card" key={movie.maPhim}>
                        <img className="card-img" src={movie.hinhAnh} height={500} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{movie.tenPhim}</h5>
                            <p className="card-text">
                                {movie.moTa}
                            </p>
                        </div>
                    </div>
                </div>
            );
        })
    }
    render() {
        return (
            <div className="container" >
                <div className="row">{this.renderListcard()}
                </div>
            </div>
        )
    }
}
