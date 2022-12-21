import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../loader';

interface IProduct {
    id: number,
    name: string,
    created_at: string,
    updated_at: string
}

const HomePage = () => {
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        setLoader(true);
        axios.get<IProduct[]>('http://laravel.pv016.com/api/products').then((responce) => { setProducts(responce.data) })
        setLoader(false);
    }, []);

    if (loader) {
        return <Loader />;
    }

    return (
        <>
            <h1>Головна сторінка</h1>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">name</th>
                        <th scope="col">created_at</th>
                        <th scope="col">updated_at</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(i => {
                        return <>
                            <tr>
                                <th scope="row">{i.id}</th>
                                <td>{i.name}</td>
                                <td>{i.created_at}</td>
                                <td>{i.updated_at}</td>
                            </tr>
                        </>
                    })}


                </tbody>
            </table>


        </>
    );
}

export default HomePage;