import React, {useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../context/RestaurantsContext'

const RestaurantList = (props) => {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext)

    let history = useHistory()
    // ask the component to fetch the data as soon as it mounts to the screen
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await RestaurantFinder.get("/")
                console.log(response)
                setRestaurants(response.data.data.restaurants)
            } catch (err) {}

        }
        fetchData()
    }, [])

    const handleDelete = async (e, id) => {
      e.stopPropagation()
      try {
          const response = await RestaurantFinder.delete(`/${id}`)
          setRestaurants(restaurants.filter((restaurant) => {
              return restaurant.id !== id
          }))
          console.log(response)
      } catch (err) {
          console.log(err)
      }
    }

    const handleUpdate = (e, id) => {
      e.stopPropagation()
      history.push(`/restaurants/${id}/update`)
    }

    const handleRestaurantSelect = (id) => {
      history.push(`/restaurants/${id}`)
    }

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
                    {restaurants && restaurants.map(restaurant => {
                        return (
                            <tr onClick={() => handleRestaurantSelect(restaurant.id)} key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"$".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td><button onClick={(e) => handleUpdate(e, restaurant.id)} className="btn btn-warning">Update</button></td>
                                <td><button onClick={(e) => handleDelete(e, restaurant.id)} className="btn btn-danger">Delete</button></td>
                            </tr>
                        )
                    })}
                    {/* <tr className="table-dark">
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
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList
