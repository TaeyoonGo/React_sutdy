import React, {useState} from 'react';

export default function AppMentor() {
    const [persons, setPersons] = useState({
        name : '엘리',
        title : '개발자',
        mentor: {
            name : '밥',
            title: '시니어 개발자',
        }
    })
    return (
        <div>
            <h1>
                {persons.name}는 {persons.title}
            </h1>
            <p>{persons.name}의 멘토는 {persons.mentor.name} ({persons.mentor.title})</p>
            <button onClick={
                () => {
                    const name = prompt(`what's your mentor's name?`);
                    setPersons((prev) => ({...prev, mentor:{...prev.mentor, name}}))
                }
            }>멘토 이름 바꾸기</button>
            <button onClick={()=>{
                const title = prompt(`what's your mentor's title?`);
                setPersons((prev) => ({...prev, mentor:{...prev.mentor, title}}))
            }}>멘토 타이틀 바꾸기</button>
        </div>
    );
}
