export default function CenterContainer () {
  return (
   <div style={{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    gap: '50px',
   }}>
    <div style={{
      width: '200px',
      height: '200px',
      backgroundColor: 'blue',
      color: 'white',
      fontSize: '36px',
      fontFamily: 'fantasy',
      padding: '15px',
      boxSizing: 'border-box',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
alignItems: 'center',
textAlign: 'center'

    }}>Reduce stress</div>
    <div style={{
      width: '50px',
      height: '50px',
      backgroundColor: 'blue'
    }}>two</div>
    <div style={{
      width: '50px',
      height: '50px',
      backgroundColor: 'blue'
    }}>three</div>
    </div>
  );
}
