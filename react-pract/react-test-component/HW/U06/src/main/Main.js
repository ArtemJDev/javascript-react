import React from 'react';
import logo from './testimg.jpg'
import './Main.css'


class Main extends React.Component {
    render() {
        return (
            <div class="row">
            <div class="col-sm-4">
                <div class="me">
                    <img src={logo} alt="my"/>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="context">
                    <h1>Имя </h1>
                    <h1>Фамилия </h1>
                    <h1>Образование </h1>
                    <h1>Опыт работы </h1>
                    <h1>Навыки в программировании </h1>
                </div>
            </div>
        </div>

        )
    }
}


export default Main;