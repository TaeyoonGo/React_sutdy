import React, {memo, useCallback, useMemo, useReducer} from 'react';
import personReducer from "./reducer/person-reducer.js";

export default function AppMentorsButton() {
    // const [person, setPerson] = useState(initalPerson);
    const [person, dispatch] = useReducer(personReducer,initalPerson)
    const handleChange = useCallback(() => {
        const prev = prompt('누구의 이름을 바꾸고 싶은가요')
        const current = prompt('이름을 무엇으로 바꾸고 싶은가요?')
        dispatch({type:'update',prev,current})
    })
    const handleAdd = useCallback(() => {
        const name = prompt(`이름이 무엇인가요?`)
        const title = prompt(`직급이 무엇인가요?`)
        dispatch({type:'added',name,title})
    })
    const handleDelete = useCallback(() => {
        const name = prompt('누구를 삭제하고 싶은가요?')
        dispatch({type:'deleted',name})
    })
    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는
            </p>
            <ul>
                {person.mentors.map((mentor, index) =>
                    (<li key={index}>{mentor.name}({mentor.title})</li>)
                )}
            </ul>
            <Button onClick={handleChange} text="멘토의 이름을 바꾸기"></Button>
            <Button onClick={handleAdd} text="멘토 추가하기"></Button>
            <Button onClick={handleDelete} text="멘토 삭제하기"></Button>
        </div>
    );
}

const initalPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자'
        }, {
            name: '제임스',
            title: '시니어개발자'
        },

    ]
}

const Button = memo(({text,onClick}) => {
    console.log('Button', text, 're-rendering 😀')
    const result = useMemo(() => calculateSomeThing(),[])
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor:'black',
                color:'white',
                borderRadius:'20px',
                margin:'0.4rem'
            }}
        >
            {`${text} ${result}`}
        </button>
    )
})

function calculateSomeThing() {
    for( let i =0; i < 10000; i++){
        console.log('😜')
    }
    return 10;
}
