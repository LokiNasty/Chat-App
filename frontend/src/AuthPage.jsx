import axios from 'axios'

const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target[0];
      axios.post
      ('http://localhost:3001/authenticate',
      {username: value}
      )
      .then(r => props.onAuth({...r.data, secret: value}))
      .catch(e => console.log('error', e))
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Capaciti Forum</div>
  
          Y<div className="form-subtitle"> Enter your Name:</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" />
            <button className="auth-button" type="submit">
              Enter Chatroom
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;