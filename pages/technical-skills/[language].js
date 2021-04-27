import { useRouter } from 'next/router'


export default function Language() {

    return <div>Language Name is {useRouter().query['language']}</div>
}