# Interview Answers

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Add your answers to the questions within `interview_answers.md` file. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
   ANSWER: Stateful components manage or "care" about state, while functional components do not. A stateless (functional) component does NOT maintain a state value.

2. When is a componentWillMount function called? What about a componentWillUpdate?
   ANSWER: The componentWillMount() lifecycle hook is primarily used to implement server-side logic before the actual rendering happens, such as making an API call to the server.
   "componentDidMount" is invoked right after rendering.

3. Define stateful logic. ANSWER: Stateful logic is any logic that depends directly on state, uses state directly, or is affected by state. The whole point of stateful logic is that your app will be able to handle multiple users interacting with each other and always be accurate. For example, if you're shopping you want to update the cart when you add something to it or if you decide to add more quantities of something the total should update based on that. In a social app life Facebook if someone likes your new cat photo, you can be notified right away on who liked it and maybe you will interact with that person, knowing they're online, and maybe you'll develop a closer relationship or start or business or whatever. Or maybe your app gives stock buy and sell stock trading recommendations based on live market data... So stateful logic is VERY important.

4. What are the three steps of creating a successful test? What is done in each phase?
   ANSWER:
   The three steps are Arrange, Act, and Assert. Arrange prepares the testing environment, renders the component or App and calls the elements to be tested. Act simulates a user action. And Assert makes statements about what behavior we expect to happen or what results we expect the user to get/see.
