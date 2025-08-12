import React, {useState} from 'react';

export default function AppForm() {
    const [form, setForm] = useState({name : '', email: ''})

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
    }
    const handleChange = (e) => {
        const {name , value} = e.target;
        setForm({...form, [name]: value})
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">이름 :</label>
                <input type="text" id="name" value={form.name} name="name" onChange={handleChange}/>
                <label htmlFor="email">이메일 : </label>
                <input type="email" id="email" value={form.email} name="email" onChange={handleChange}/>
                <button>제출하기</button>
            </form>
        </div>
    );
}
