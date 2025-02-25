
import "../styles/global.css";

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--black-color)',
      color: '#fff',
      padding: '1rem',
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p style={{
        lineHeight: '1.5',
        letterSpacing: '2px',
        fontSize:'18px'
      }}>© 2025 wishdrop</p>
    </footer>
  );
}
