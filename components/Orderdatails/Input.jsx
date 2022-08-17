import React from 'react'

export default function Input({ styles, name, type, example, data, setData, label }) {

    return (

        <div className={styles.item}>
            <label className={styles.label} htmlFor={name} > {label} </label>
            <input required onChange={e => setData(e.target.value)} value={data} type={type} className={styles.input} id={name} name={name} placeholder={example} />
        </div>

    )
}


