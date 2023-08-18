# Asynchronous Programming

> "Synchronous basically means that you can only execute one thing at a time. Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one."
>
> - [Mike](https://stackoverflow.com/a/33585047)

---

"The Internet", "The Web", "Web Apps". All of these terms describe something that is interconnected. If you zoom out a bit, the entire internet is basically billions of computers all sharing information and software! But so far your projects have been all alone on your computer :(

Everything you have learned so far happens on the _callstack_, everything on the callstack executes _synchronously_. Synchronous means that each line of code will finish executing before the next one starts. Think of infinite loops, your browser freezes because nothing else can happen while the loop is looping!

What makes web development so cool is the ... web. Being able to build applications that connect computers form across the internet. This also introduces some challenges, it can take some time for computers to talk to each other across the internet. You don't want your apps freezing while you wait to hear back from another computer.

Enter _asynchronous programming_: writing code that tells your browser to start one task and move on to a new task while you wait for the first to finish. This is possible because of the _Event Loop_.

- [Learning Objectives](#learning-objectives): what you can expect to learn from
  studying this material
- [Suggested Study](./suggested-study.md): Helpful links for this module, useful
  but not required.

## Learning Objectives

- You understand the JavaScript Event Loop, and can demonstrate this by using `setTimeout` and `setInterval` to schedule simple tasks.
- You can explain why Asynchronous Programming is important for programs that have _blocking_ and _non-blocking_ tasks.
- You can explain the basics of the Client/Server model and HTTP requests and can `fetch` data from RESTful APIs.
- You can break down an asynchronous problem into smaller tasks and solve it using promises. This includes identify which tasks depend on each other and which are independent:
- _dependent tasks_: The return value from one task is required to start the next task, these must be completed in a specific order - `.then`
- _independent tasks_: These tasks do not use each other's return values, they can be completed at the same time - `Promise.all`system.
- You can fetch data from an API and render it into the DOM using `/api-calls`, `/handlers` and `async`/`await` syntax.
- You can write unit tests for functions that return promises using `async`/`await` syntax.

[TOP](#asynchronous-programming)

---

### Running Tests

You can also run tests directly from CLI using the NPM script:

- `npm run test -- ./path/to/file.js`

## Class recording

<details>
<summary>expand/collapse</summary>
<br>

### Week1

- [day 1](https://youtu.be/76TYxlYyLkE)
- [day 2](https://youtu.be/SZfgzshOHCo)
- [day 3](https://youtu.be/FwaPAZHrVvg)
- [day 5](https://youtu.be/5kBaW2W-xCM)

### Week2

- [day 6](https://youtu.be/dNb6m_dOrZI)
- [day 7](https://youtu.be/pmJEARLo6Fg)
- [day 8](https://youtu.be/2pnE95Vsh_0)
- [day 10](https://youtu.be/23GXyoM4PKw)

### Week3

</details>
