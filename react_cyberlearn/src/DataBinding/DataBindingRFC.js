import React from 'react'

const school = 'cyberlearn';

const student1 = {
    name: 'Covid 19',
    age: 25
}

const renderInfoVirus = () => {
    const virus = {
        id: 'covid-19',
        name: 'corona',
        img: 'https://files.benhvien108.vn/ecm/source_files/2020/04/29/200429-2-1-163041-290420-33.jpg',
        alias: 'SARS-CoV-2'
    }
    return (
        <div className="card text-white bg-primary w-50 h-50">
            <img className="card-img-top" src={virus.img} alt={virus.id} />
            <div className="card-body">
                <h4 className="card-title">{virus.name}</h4>
                <p className="card-text">{virus.alias}</p>
            </div>
        </div>
    )

}

export default function DataBindingRFC() {
    const name = " Thắng cyberlearn";
    return (
        <div>
            <h1>React functional component data binding</h1>
            <hr />
            <h1 className="text-danger">{name}</h1>

            <h1>name: {student1.name} - age: {student1.age} - school: {school}</h1>
            <h3>Info virus</h3>
            {renderInfoVirus()}
        </div>
    )
}
