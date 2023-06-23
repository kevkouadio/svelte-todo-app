<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";
    import { initializeApp } from "firebase/app";
    import {
        getFirestore,
        collection,
        getDocs,
        addDoc,
        deleteDoc,
        updateDoc,
        doc,
    } from "firebase/firestore";

    // Initialize Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyABsB-Q0jq1VJQ0n8h8L7oV6KH2HVahAkY",
        authDomain: "svelte-todo-app-d366d.firebaseapp.com",
        projectId: "svelte-todo-app-d366d",
        storageBucket: "svelte-todo-app-d366d.appspot.com",
        messagingSenderId: "201475978528",
        appId: "1:201475978528:web:ebbdf3e8c945f6ab749345",
    };

    const firebaseApp = initializeApp(firebaseConfig);
    const db = getFirestore(firebaseApp);
    const colRef = collection(db, "todos");
    const todos = writable([]);

    //add todos
    function addTodo() {
        const inputValue = document.getElementById("taskInput").value;
        if (inputValue !== "") {
            addDoc(colRef, { task: inputValue })
                .then((docRef) => {
                    const newTodo = { id: docRef.id, task: inputValue };
                    todos.update((items) => [...items, newTodo]);
                    document.getElementById("taskInput").value = "";
                })
                .catch((error) => {
                    console.error("Error adding todo: ", error);
                });
        }
    }
    //add todo by pressing return key
    function handleKeyPress(event) {
        if (event.key === "Enter") {
            addTodo();
        }
    }
    //delete todo
    function deleteTodo(id) {
        deleteDoc(doc(colRef, id))
            .then(() => {
                todos.update((items) => items.filter((item) => item.id !== id));
            })
            .catch((error) => {
                console.error("Error deleting todo: ", error);
            });
    }
    //update todo status
    function updateTodoStatus(id, isDone) {
        updateDoc(doc(colRef, id), { isDone })
            .then(() => {
                todos.update((items) => {
                    return items.map((item) => {
                        if (item.id === id) {
                            return { ...item, isDone };
                        }
                        return item;
                    });
                });
            })
            .catch((error) => {
                console.error("Error updating todo status: ", error);
            });
    }
    //toggle todos status 
    function toggleTodoStatus(id, isDone) {
        const updatedStatus = !isDone;
        updateTodoStatus(id, updatedStatus);
    }

    onMount(() => {
        getDocs(colRef)
            .then((snapshot) => {
                const updatedTodos = [];
                snapshot.docs.forEach((doc) => {
                    updatedTodos.push({ id: doc.id, ...doc.data() });
                });
                todos.set(updatedTodos);
            })
            .catch((error) => {
                console.error("Error getting todos: ", error);
            });
    });
</script>

<main>
    <h1>Todos</h1>
    <div class="input-container">
        <input
            id="taskInput"
            type="text"
            placeholder="Add a task"
            on:keypress={handleKeyPress}
        />
        <button class="AddBtn" on:click={addTodo}>Add</button>
    </div>
    <ul>
        {#each $todos as todo (todo.id)}
            <li class:done={todo.isDone}>
                <div class="task {todo.isDone ? 'done' : ''}">{todo.task}</div>
                <div class="buttons">
                    <button
                        class="deleteBtn"
                        on:click={() => deleteTodo(todo.id)}>Delete</button
                    >
                    <button
                        class="doneBtn"
                        on:click={() => toggleTodoStatus(todo.id, todo.isDone)}
                    >
                        {#if todo.isDone}
                            Not Done
                        {:else}
                            Done
                        {/if}
                    </button>
                </div>
            </li>
        {/each}
    </ul>
</main>

<style>
    main {
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        font-family: Arial, sans-serif;
    }

    .input-container {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    h1 {
        text-align: center;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        padding: 10px;
        border-radius: 4px;
        background-color: #f5f5f5;
    }

    .task {
        flex-grow: 1;
    }

    .buttons {
        display: flex;
        gap: 5px;
    }

    input[type="text"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }

    button {
        padding: 8px 12px;
        border: none;
        border-radius: 4px;
        color: white;
        cursor: pointer;
    }

    .AddBtn {
        background-color: #4caf50;
    }

    .deleteBtn {
        background-color: rgb(205, 59, 59);
    }

    .doneBtn {
        background-color: #4caf50;
    }

    .deleteBtn:hover {
        background-color: darkred;
    }

    .doneBtn:hover {
        background-color: #45a049;
    }

    li.done {
        background-color: #d7f9e3;
    }

    .task.done {
        text-decoration: line-through;
    }

    .task.done::after {
        content: "\2713";
        color: #28a745;
        margin-left: 5px;
    }
</style>
