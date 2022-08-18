import axios from "axios";
import styles from "../../styles/login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    try {
      console.log(username);
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (ex) {
      setError(true);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>

        <input
          placeholder="username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <button className={styles.button} onClick={handleClick}>
          Sign In
        </button>
        {error && <span className={styles.error}> Wrong Credentials</span>}
      </div>
    </div>
  );
}
