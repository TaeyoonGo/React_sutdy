import React, {memo, useCallback, useMemo, useReducer, useState} from 'react';
import PersonReducer from "./reducer/person-reducer.js";

export default function AppMentorsButton() {
    const [person, dispatch] = useReducer(PersonReducer,initialPerson)
    const handleUpdate = useCallback(()  => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)
        dispatch({type:'updated',prev,current})
    },[])
    const handleAdd = useCallback(() => {
        const name = prompt('멘토의 이름이 무엇입니까?')
        const title= prompt('멘토의 직업이 무엇입니까?')
        dispatch({type:'added',name,title})
    },[])
    const handleDelete = useCallback(() => {
        const name = prompt('멘토를 어떻게 삭제하고 싶나요?')

        dispatch({type:'deleted',name})
    },[])
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor,index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <Button text='멘토 이름 바꾸기' onClick={handleUpdate}></Button>
            <Button text='삭제하기' onClick={handleDelete}></Button>
            <Button text='멘토 추가하기' onClick={handleAdd}></Button>
        </div>
    );
}


const initialPerson = {
    name:'엘리',
    title:'개발자',
    mentors:[
        {
            name:'밥',
            title:'시니어개발자'
        },
        {
            name:'제임스',
            title:'시니어개발자'
        }
    ]
}

const Button = memo(({text,onClick}) => {
    console.log('button',text, 're-rendering😀');
    const result = useMemo(() => calculateSomeThing(),[])
    return (
        <button onClick={onClick}
                style={{
                    backgroundColor : 'black',
                    color:'white',
                    borderRadius:'20px',
                    margin:'0.4rem'
                }}
        >`${text} ${result} `</button>

    )
})


function calculateSomeThing() {
    for (let i = 0; i < 10000; i++){
        console.log('😀')
    }
    return 10;
}
