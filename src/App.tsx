import React from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <main>
      <h1>STYLEK</h1>
      <p>اكتشف ستايلك</p>
      <p>قريبًا في كفر الشيخ</p>
    </main>
  );
}

export default App;
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
