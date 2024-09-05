import React, { useEffect, useState } from 'react'
import supabase from '../supabase'

const ListWarga = () => {

    const [data, setData] = useState([])
    const [refresh, setRefresh] = useState(false)


    useEffect(() => {
        supabase.from('list-warga').select('*')
        .then(res => {
            if(res.error) {
                console.log(`error nya di ${res.error}`)
            } else {
                setData(res.data)
            }
        })
    }, [refresh])



  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>No Rumah</th>
                    <th>Nama Warga</th>
                    <th>Status Rumah</th>
                    <th>Telephone</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e) => (
                        <tr key={e.id}>
                            <td>{e.no_rumah}</td>
                            <td>{e.nama_warga}</td>
                            <td>{e.status_rumah}</td>
                            <td>{e.no_telepone}</td>
                        </tr>
                    ))
                }   
            </tbody>
        </table>
    </div>
  )
}

export default ListWarga