import { useState } from "react";
import styles from "../../styles/Orderdatails.module.css";
import Input from "./Input";

const Orderdatails = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("")
    const [phone, setPhone] = useState(null)
    const [address, setAddress] = useState("")
    //* Functions for the form
    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    }
    return (
        <div className={styles.container}>
            <div className={styles.wrapper} >
                <h1 className={styles.title}>You will pay ${total} after deleviry</h1>
                <Input type="text" name="name" example="Jon Doe" label="Name surname" data={customer} styles={styles} setData={setCustomer} />
                <Input type="tel" name="tel" example="+213561475310" label="Phone number" data={phone} styles={styles} setData={setPhone} />
                <div className={styles.item}>
                    <label className={styles.label}>Adress</label>
                    <textarea style={styles.textarea} placeholder="Elon st,505 Nv" value={address} onChange={e => setAddress(e.target.value)} rows={5} />
                </div>
                <button className={styles.submit} onClick={handleClick}  >Order</button>

            </div>
        </div>
    )
}

export default Orderdatails

