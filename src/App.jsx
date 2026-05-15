import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import MedAcePro from './MedAcePro';

function App() {
  const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

      useEffect(() => {
          // User status monitor karo
              const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                    setUser(currentUser);
                          setLoading(false);
                              });
                                  return () => unsubscribe();
                                    }, []);

                                      const loginWithGoogle = async () => {
                                          const provider = new GoogleAuthProvider();
                                              try {
                                                    // Popup mode is better for StackBlitz
                                                          await signInWithPopup(auth, provider);
                                                                console.log("Login Success!");
                                                                    } catch (error) {
                                                                          console.error("Login Error:", error.code);
                                                                                if (error.code === 'auth/unauthorized-domain') {
                                                                                        alert("Bhai, Firebase Console mein domain add karna bhool gaye!");
                                                                                              }
                                                                                                  }
                                                                                                    };

                                                                                                      if (loading) return <div className="h-screen flex items-center justify-center font-bold text-blue-500">Checking...</div>;

                                                                                                        if (!user) {
                                                                                                            return (
                                                                                                                  <div className="h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
                                                                                                                          <h1 className="text-4xl font-black text-blue-900 mb-8">medACE</h1>
                                                                                                                                  <button 
                                                                                                                                            onClick={loginWithGoogle}
                                                                                                                                                      className="bg-white border border-gray-200 px-8 py-4 rounded-3xl shadow-sm font-bold flex items-center gap-4 active:scale-95 transition-all"
                                                                                                                                                              >
                                                                                                                                                                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="20" alt="G" />
                                                                                                                                                                                  Login with Google
                                                                                                                                                                                          </button>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                    );
                                                                                                                                                                                                      }

                                                                                                                                                                                                        return <MedAcePro user={user} />;
                                                                                                                                                                                                        }

                                                                                                                                                                                                        export default App;
                                                                                                                                                                                                        