<script>
    // import { signUp } from './main.js';
    // let email = '';
    // let password = '';
  
    // function handleSubmit() {
    //   // Handle form submission here
    //   // You can add your login logic or API call
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   signUp(email, password);
    // }
  </script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
    }
  
    .form-group {
      margin-bottom: 15px;
    }
  
    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
    }
  
    .form-group input {
      width: 300px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  
    .submit-button {
      padding: 10px 20px;
      background-color: #4caf50;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  
    .submit-button:hover {
      background-color: #45a049;
    }
  </style>
  
  <div class="container">
    <!-- <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required />
      </div>
  
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" bind:value={password} required />
      </div>
  
      <button class="submit-button" type="submit">Login</button>
    </form> -->
    <h2>Login</h2>
    <form class="login">
        <label for="email">Email</label>
        <input type="email" name="email">
        <label for="password">password</label>
        <input type="password" name="password">
        <br/>
        <button class="submit-button">Login</button>
        <br/>
    </form>
    <button class="logout">Logout</button>

  </div>
  