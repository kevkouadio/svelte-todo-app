<script>
    // import { signUp } from './main.js';

    // let email = '';
    // let password = '';
    // let confirmPassword = '';
    // let showPassword = false;
    // $: type = showPassword ? 'text' : 'password';

  
    // function handleSubmit(e) {
    //   e.preventDefault()
    //   console.log('Email:', email);
    //   console.log('Password:', password);
    //   console.log('Confirm Password:', confirmPassword);
    //     if (password === confirmPassword) {
    //         signUp(email, password);
    //     return;
    //   } else {console.log('Passwords do not match');}
      
    // }
  
    // function togglePasswordVisibility() {
    //   showPassword = !showPassword;
    // }

    // function onPasswordInput (event) {
	// password = event.target.value
    // }

    // function onComfirmPasswordInput (event) {
    //     confirmPassword = event.target.value  
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
          <input {type} { password } {...$$restProps} on:input={ onPasswordInput } id="password" required />
      </div>
  
      <div class="form-group">
        <label for="confirm-password">Confirm Password:</label>
        <input {type} {confirmPassword} {...$$restProps} on:input={ onComfirmPasswordInput } id="confirm-password" required />
      </div>
      <div>
            <input type="checkbox" on:checked={showPassword} on:change={togglePasswordVisibility} />
            Show Password
      </div>
      <br />
      <button class="submit-button" type="submit">Sign Up</button>
    </form> -->
    <h2>Sign up</h2>
    <form class="signup">
        <label for="email">Email</label>
        <input type="email" name="email">
        <label for="password">password</label>
        <input type="password" name="password">
        <br/>
        <button class="submit-button">Sign up</button>
    </form>
  </div>
  