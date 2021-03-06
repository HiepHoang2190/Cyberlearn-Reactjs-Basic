import React, { Component } from 'react';

class DataBinding extends Component {

    // Tạo 1 thuộc tính

    name = "Hoàng Ngọc Thắng";

    //Thuộc tính object student
    student = {
        name: 'Song Lê',
        age: 20
    }

    //Binding phương thức (hàm của lớp đối tượng)
    //Tất cả hàm render đều phải trả về component (jsx)
    renderImage = () => {
        return <img src="https://files.benhvien108.vn/ecm/source_files/2020/04/29/200429-2-1-163041-290420-33.jpg" alt="covid.jpg" />
    }
    renderMultiComponent = () => {
        return <nav className="nav justify-content-center bg-dark">
            <a className="nav-link active" href="http://cyberlearn.vn">Active link</a>
            <a className="nav-link" href="http://cyberlearn.vn">Link</a>
            <a className="nav-link disabled" href="http://cyberlearn.vn">Disabled link</a>
        </nav>
    }
    //render nội dung là component chứa thông tin object
    renderInfoVirus = () => {
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
    render() {
        //biến của hàm render -> không sử dụng được cho hàm khác
        const school = 'cyberlearn';

        const student1 = {
            name: 'Covid 19',
            age: 25
        }

        const renderInfoVirus1 = () => {
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

        return (
            <div>
                <h1>React class component data binding</h1>
                <hr />
                <h1 id="title">hello {this.name} - school: {school}</h1>
                <h1>Binding object</h1>
                <h1 id="title">name: {this.student.name} - age: {this.student.age}</h1>
                <h1 id="title">name: {student1.name} - age: {student1.age}</h1>
                <h3>Binding function</h3>
                {this.renderImage()}
                {this.renderMultiComponent()}
                {this.renderInfoVirus()}
                {renderInfoVirus1()}
            </div>
        );
    }
}

export default DataBinding;