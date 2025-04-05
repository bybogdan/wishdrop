// src/components/GoogleSignIn.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

const buttonStyle = {
  backgroundColor: 'var(--white-color)',
  color: 'var(--black-color)',
  padding: '1rem 2rem',
  borderRadius: '4px',
  boxShadow: '0 0 30px rgba(0,0,0,0.6)',
  maxWidth: '300px',
  border: 'none',
  cursor: 'pointer',
}


export default function GoogleSignIn() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleSignIn = async () => {
    console.log('handleSignIn')
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    });

    if (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error signing out:', error.message);
    }
  };

  console.log('user object:', user)

  return (
    <div>
      {user ? (
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '1rem',

        }}>
          <p>{user.user_metadata.full_name}</p>
          <img style={{
            borderRadius: '50%',
            width: '50px',
            height: '50px',
          }} src={user.user_metadata.picture}/>
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: 'none',
            outline: 'none',
            cursor: 'alias'

          }} onClick={handleSignOut}>
            Exit
          </button>
        </div>
      ) : (
        <button style={{
          backgroundColor: 'transparent',
          color: 'white',
          border: 'none',
          outline: 'none',
          cursor: 'alias'

        }} onClick={handleSignIn}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}
