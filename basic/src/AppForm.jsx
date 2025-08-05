import React, {useState} from 'react';

export default function AppForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }
    const [form, setForm] = useState({name: '' , email: ''})
    const handleChange = (e) => {
        const {name , value} = e.target;
        setForm({...form, [name] : value})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="form-label"></label>
            <input type="text"
                   id="name"
                   name="name"
                   value={form.name}
                   onChange={handleChange}
                   />
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" value={form.email} onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}
