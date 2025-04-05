
import "../styles/global.css";
import GoogleSignIn from "./GoogleSignIn";

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--black-color)',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      marginTop: 'auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <p style={{
        lineHeight: '1.5',
        letterSpacing: '2px',
        fontSize:'18px'
      }}>wishdrop</p>
      <GoogleSignIn  />
    </header>
  );
}
