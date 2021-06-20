import React from 'react'

const RestaurantList = () => {
    return (
        <div className="list-group">
            <table className="table table-hover">
                <thead>
                    <tr className="bg-primary">
                        <th className="col">Restaurant</th>
                        <th className="col">Location</th>
                        <th className="col">Price Range</th>
                        <th className="col">Ratings</th>
                        <th className="col">Edit</th>
                        <th className="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-dark">
                        <td>mcdonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                    <tr className="table-dark">
                        <td>mcdonalds</td>
                        <td>New York</td>
                        <td>$$</td>
                        <td>Rating</td>
                        <td><button className="btn btn-warning">Update</button></td>
                        <td><button className="btn btn-danger">Delete</button></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    )
}

export default RestaurantList
