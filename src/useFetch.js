import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then((response) => {
                setData(response.data);
            }).catch((err) => {
                setErr(err)
            }).finally(() => {
                setLoading(false);
            })

    }, [url])
    return { data, loading, err };
}
export default useFetch