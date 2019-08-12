import React, { Component } from 'react'
import appStoreService from '../services/app-store-services'

class AppList extends Component {
    state = {
        apps: [],
    };

componentDidMount() {
    appStoreService.getAllApps()
    .then(response => {
        console.log(response)
        this.setState({
            apps:response.data.listOfApps
        })
    })
}

handleDeleteClick = (id) => {
    const {apps} = this.state;
    appStoreService.deleteOneApp(id)
    .then(() =>{
        const filteredApps = apps.filter((singleApp) =>{
            return singleApp._id !== id
        })
        this.setState({
            apps:filteredApps,
        })
    })
}

    render() {
                const {apps} = this.state;
        return (
            <div>
                <h1>App List</h1>
                {apps.length > 0 ? apps.map((app) =>{
                    return (
                        <article>
                            <img src={app.image} alt={app.name}/>
                            <h3>{app.name}</h3>
                            <p>{app.price}</p>
                            <p>{app.category}</p>
                            <button onClick={() =>{
                                this.handleDeleteClick(app._id)
                            }}>delete</button>
                        </article>
                    )
                }): <p>Loading...</p> }
                   
                   
                  
            </div>
        )
    }
}


export default AppList
