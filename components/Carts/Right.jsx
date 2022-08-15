import { useEffect, useState } from "react";
import styles from "../../styles/Cart.module.css";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

export default function Right({ cart }) {
  const [open, setOpen] = useState(false);
  // This values are the props in the UI
  const amount = `${cart.total}`;
  const currency = "USD";
  const style = { layout: "vertical" };
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping
              console.log(shipping);
            });
          }}
        />
      </>
    );
  };

  return (
    <div className={styles.right}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>CART TOTAL</h2>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Subtotal:</b>${cart.total}
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Discount:</b>$0.00
        </div>
        <div className={styles.totalText}>
          <b className={styles.totalTextTitle}>Total:</b>$79.60
        </div>
        {open ? (
          <div className={styles.paymentMethods}>
            <button className={styles.payButton}>CASH ONDELIVERY </button>
            <PayPalScriptProvider
              options={{
                "client-id":
                  "AbAHkuTcf2RRLASKk6ehs309zySy1UvSpDwnDz2cULWdLvfwySe-eP65031pFRdX6rQTHlZo62sVWq0h",
                components: "buttons",
                currency: "USD",
                "disable-funding": "credit,card,p24",
              }}
            >
              <ButtonWrapper currency={currency} showSpinner={false} />
            </PayPalScriptProvider>
          </div>
        ) : (
          <button onClick={(_) => setOpen(true)} className={styles.button}>
            CHECKOUT NOW!
          </button>
        )}
      </div>
    </div>
  );
}

