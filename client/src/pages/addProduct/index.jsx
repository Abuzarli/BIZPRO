import React from 'react'
import { Helmet } from 'react-helmet'
import style from './index.module.css'

const ADDPRODUCT = () => {
  return (
    <>
      <Helmet>
        <title>Add Product</title>
        <meta charset="utf-8" />
      </Helmet>

      <section className={style.section}>
        <div >
            {/* <div className={style.add_card}>
            <input type="text" placeholder='icon' />
                <br />
                <input type="text"  placeholder='Name'/>
                <br />
                <input type="text" placeholder='Description'/>
            </div> */}
        </div>
      </section>
    </>
  )
}

export default ADDPRODUCT
