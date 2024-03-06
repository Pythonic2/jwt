import React from 'react';
import ListaItems from './ListComponente';
import LoginComponente from './LoginComponente';
export default class UsersLists extends React.Component{
    state = {lists: [], loading: true}

    async componentDidMount(){
        const config = {
            headers: {'content-type': 'application/json'}
        }
        config.headers['Authorization'] = 'Token ' + localStorage.getItem('token')
        var url = "http://127.0.0.1:8000/lista/";
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data)
        this.setState({lists:data, loading:false});
    }
    render ()
    {
        const listApi = this.state.lists;
        var token = localStorage.getItem('token');
        if(!token){

            return <LoginComponente/>
        }
        else 
            return (
                    <div>
                        {listApi.map(list => <ListaItems key={list.id} listName={list.nome} items={list.item_set} />)}
                        
                    </div>
                    )
        }
}   