1.  **Difference between Component and PureComponent:**

    - **Component:** It is a base class for React components. Components re-render whenever their state or props change, regardless of the changes' impact on the output. An example where it might break your app is when using complex rendering logic within a component that leads to unnecessary re-renders, impacting performance.
    - **PureComponent:** PureComponent is similar to Component but implements shouldComponentUpdate() with a shallow prop and state comparison. It prevents unnecessary re-renders by skipping the render process if the props and state haven't changed. It's beneficial for optimizing performance, especially for components with expensive rendering logic. However, it can break your app if the props or state contain complex objects and their references change without their contents changing, leading to unintentional skips of re-renders.

2.  **Context + ShouldComponentUpdate:**Using ShouldComponentUpdate with Context can be dangerous because it might lead to unexpected behavior due to the shallow comparison of context values. Context updates don't trigger re-renders in consumer components if the context value itself remains the same, which can result in components not updating as expected when using ShouldComponentUpdate to optimize re-renders.
3.  **Ways to pass information from a component to its PARENT:**

    - Callbacks: Pass a function from the parent component to the child component as a prop, and call this function in the child component to send data back to the parent.
    - Props: Child components can pass data to their parent components by invoking functions passed down to them as props.
    - Context: Use React Context to pass data from a parent component to its descendants without explicitly passing props through every level of the component tree.

4.  **Ways to prevent components from re-rendering:**

    - **Memoization:** Use memoization techniques like useMemo or useCallback to memoize expensive computations or functions, preventing unnecessary re-execution on re-renders.
    - **Optimizing shouldComponentUpdate or React.memo:** Implement shouldComponentUpdate lifecycle method in class components or wrap functional components with React.memo to perform shallow comparisons of props and prevent re-renders when the props haven't changed.

5.  **Fragment and its necessity:**

    - A fragment is a built-in component in React used to group multiple children elements without adding extra nodes to the DOM. Fragments are useful when returning multiple elements from a component's render method without introducing unnecessary div elements. It might break your app if fragments are not handled properly, such as when using them with certain CSS styles that rely on specific DOM structures.

6.  **Examples of the Higher Order Component (HOC) pattern:**

    - Authentication HOC: A HOC that checks the user's authentication status and conditionally renders a component based on the authentication state.
    - Redux Provider HOC: A HOC that wraps a component and provides it with access to the Redux store, allowing the component to connect to the store, dispatch actions, and subscribe to state changes.
    - Theme Provider HOC: A HOC that injects a theme object or theme-related props into a component, allowing the component to access and apply styles based on the current theme.
    - Data Fetching HOC: A HOC that fetches data from an API or other data sources and passes it as props to a wrapped component.

7.  **Difference in handling exceptions:**

    - **Promises:** Exceptions in promises can be caught using .catch() method chained to the promise or using try-catch blocks inside async functions.
    - **Callbacks:** Exceptions in callbacks are typically handled by providing an error-first callback function where errors are passed as the first argument.
    - **Async...await:** Exceptions in async...await syntax can be caught using try-catch blocks, providing a more synchronous-like error handling approach compared to promises.

8.  **setState and its asynchronous nature:**

    - setState takes two arguments: an object or a function and an optional callback function. It is asynchronous because React batches state updates for performance reasons, meaning that calling setState does not immediately mutate the state but schedules an update, and React will perform the state update and re-render asynchronously.

9.  **Steps to migrate a Class to Function Component:**

    - **Identify State Usage:** Determine where state is used in the class component.
    - **Refactor State:** Replace this.state with useState hook in the function component.
    - **Refactor Lifecycle Methods:** Convert lifecycle methods (e.g., componentDidMount, componentDidUpdate) to useEffect hook.
    - **Refactor Class Methods:** Convert class methods to functions or use useCallback hook if they depend on props or state.
    - **Remove Class Syntax:** Remove the class syntax and adjust component structure to function component syntax.

10. **Ways styles can be used with components:**

    - Inline Styles: Apply styles directly as JavaScript objects within the component's JSX.

    - CSS Modules: Import CSS files into components and use locally scoped CSS class names.

    - Styled-components: Define component-specific styles using tagged template literals to create styled components with CSS.

11. **Rendering HTML string from the server:**

    - Use dangerouslySetInnerHTML prop: React's dangerouslySetInnerHTML allows rendering HTML strings received from the server. However, it should be used with caution as it bypasses React's built-in XSS protections and can expose the application to security vulnerabilities if used improperly.

```
function MyComponent({ htmlString }) {
 return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
}
```
