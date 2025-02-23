// src/components/GoogleSignIn.tsx
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function GoogleSignIn() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('session', session)
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

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={handleSignOut} style={{ padding: '10px 20px', fontSize: '16px' }}>
            Sign Out
          </button>
        </div>
      ) : (
        <button onClick={handleSignIn} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Sign in with Google
        </button>
      )}
    </div>
  );
}
