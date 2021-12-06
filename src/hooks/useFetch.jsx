import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { URL } from '../URL'
const useFetch = (url1) => {

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })
    const isMotend = useRef(true);
    useEffect(() => {
        
        return () => {
            isMotend.current = false;
        }
    }, [])
    useEffect(() => {
        const traerDatos = async () => {
            setState({
                data: null,
                loading: true,
                error: null
            })
            try {
                const api = axios.create({ baseURL: URL.urls });
                const response = await api.get(url1);
                const data = response.data


                // await axios.get(url1)
                // .then(resp => {
                //     setState({
                //         error: null,
                //         loading: false,
                //         data : resp.data
                //     })
                // }).catch(error => console.log('Error'+error));


                // const response = await axios.get(url1);
                // const data = response.data

               
                    if (data) {
                        if(isMotend.current){
                            setState({
                                error: null,
                                loading: false,
                                data
                            })
                        }
                        else{
                            console.log('Desmontado')
                        }
                    }
               
            } catch (error) {
                console.log('Error'+error)
            }

        }
        traerDatos();

        // axios.get(URL.urls)
        // .then(response => {
        //     setState({
        //         loading: false,
        //         error: null,
        //         response
        //     })
        // })
        // .catch(e => {
        //     console.log('Error: '+e)
        // })

    }, [url1])

    return state;
}

export default useFetch
