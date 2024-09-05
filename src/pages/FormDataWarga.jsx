import React, { useEffect, useState } from 'react'
import supabase from '../supabase'

const FormDataWarga = () => {

  function handleSubmit(e) {
    e.preventDefault()
    const nama = e.target.nama.value;
    const noRmah = e.target.noRumah.value;
    const statusRumah = e.target.statusRumah.value;
    const telephone = e.target.noTelephone.value;

    supabase.from('list-warga').insert([
      {
        nama_warga : nama,
        no_rumah : noRmah,
        status_rumah: statusRumah,
        no_telepone : telephone
      }
  ]) 
    .then(res => {
      alert('data berhasil disimpan')
    })

    e.target.reset()
  }


  return (
    <div>
        <h1>Masukan data warga rt 100/45</h1>

      <form onSubmit={handleSubmit} className='grid mt-3   gap-5'>

        <div className='flex  gap-1'>
          <label htmlFor="nama">Nama :</label>
          <input type="text" placeholder='masukan nama warga' id='nama' className='border py-1 px-2 rounded-md' />
        </div>

        <div className='flex  gap-1'>
          <label htmlFor="noRumah">noRumah :</label>
          <input type="text" placeholder='masukan noRumah warga' id='noRumah' className='border py-1 px-2 rounded-md' />
        </div>

        <div className='flex  gap-1'>
          <label htmlFor="statusRumah">Status Rumah :</label>
          <input type="text" placeholder='masukan statusRumah warga' id='statusRumah' className='border py-1 px-2 rounded-md' />
        </div>

        <div className='flex  gap-1'>
          <label htmlFor="noTelephone">noTelephone :</label>
          <input type="text" placeholder='masukan noTelephone warga' id='noTelephone' className='border py-1 px-2 rounded-md' />
        </div>
        <button type='submit' >submit</button>
      </form>
    </div>
  )
}

export default FormDataWarga