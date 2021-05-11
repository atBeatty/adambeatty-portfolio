import { useRouter } from 'next/router'


export default function Language() {

    return <div>Technology Name is {useRouter().query['language']}</div>
}