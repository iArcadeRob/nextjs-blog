import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Local() {
    const { data, error } = useSWR('//xkcd.com/4/info.0.json', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    // render data
    return <div>{data}</div>
}