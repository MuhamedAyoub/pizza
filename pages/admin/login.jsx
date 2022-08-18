import axios from "axios";
import styles from "../../styles/login.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleClick = async () => {
    if (error) {
      try {
        await axios.post("http://localhost:3000/api/login", {
          username,
          password,
        });
        router.push("/admin");
      } catch (ex) {
        setError(true);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>

        <input
          placeholder="username"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={password}
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
