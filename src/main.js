import App from './App.svelte';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const app = new App({
	target: document.body,
	props: {
		name: 'Kevin'
	}
});

export default app;

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyABsB-Q0jq1VJQ0n8h8L7oV6KH2HVahAkY",
//   authDomain: "svelte-todo-app-d366d.firebaseapp.com",
//   projectId: "svelte-todo-app-d366d",
//   storageBucket: "svelte-todo-app-d366d.appspot.com",
//   messagingSenderId: "201475978528",
//   appId: "1:201475978528:web:ebbdf3e8c945f6ab749345"
// };

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth()

//fuction signUp 
// async function signUp() {
//     try {
//       const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
//       const user = userCredential.user;
//       console.log('Successfully signed up:', user);
//     } catch (error) {
//       console.log('Error signing up:', error.message);
//     }
//   }
//   export { signUp };

// firestore initialization and config
const db = getFirestore()
const colRef = collection(db, 'todos')
getDocs(colRef)
.then((snapshot) => {
let todos = []
snapshot.docs.forEach((doc) => {
	todos.push({...doc.data(), id:doc.id})
})
console.log(todos)
})

//signIn function
const usignUp = document.querySelector('.signup')
usignUp.addEventListener('submit', (e) => { 
	e.preventDefault()
	const email = usignUp.email.value
	const password = usignUp.password.value

	createUserWithEmailAndPassword(auth, email, password)
	.then((cred) => {
		console.log('user successfully signed up:', cred.user);
		usignUp.reset()
	})
	.catch((err)=> {
		console.log(err.message)
	})
})

//signOut function
const ulogout = document.querySelector('.logout')
ulogout.addEventListener('click', () => {
	signOut(auth)
	.then(() => {
		console.log("Thanks for using our service today")
	})
	.catch((err) => {
		console.log(err.message)
	})
})

//signIn function
const ulogin = document.querySelector('.login')
ulogin.addEventListener('submit', (e) => {
	e.preventDefault()
	const uemail = ulogin.email.value
	const upassword = ulogin.password.value

	signInWithEmailAndPassword(auth, uemail, upassword)
	.then((cred) => {
		console.log('user successfully signed up:', cred.user);
	})
	.catch((err)=> {
		console.log(err.message)
	})
})
