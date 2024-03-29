import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product/create'

const CreateProduct = () => {
    const [description, setDescription] = useState('')
    const [price, SetPrice] = useState(0)
    const [stock, SetStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {description: description, price: price, stock: stock} )
        navigate('/')
    }

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input 
                        value={description}
                        onChange={ (e)=> setDescription(e.target.value)}
                        type='text'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input 
                        value={price}
                        onChange={ (e)=> SetPrice(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Stock</label>
                    <input 
                        value={stock}
                        onChange={ (e)=> SetStock(e.target.value)}
                        type='number'
                        className='form-control'
                    />
                </div>

                <button type='submit' className='btn btn-primary'>Store</button>
            </form>
        </div>
    )
}

export default CreateProduct