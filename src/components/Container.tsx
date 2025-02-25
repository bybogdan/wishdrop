export default function Container ({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      height: '100%',
      padding: '1rem',
    }}>
      {children}
    </div>
  );
}
