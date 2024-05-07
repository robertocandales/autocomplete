This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<div style="display: flex; flex-direction: column;">
  <img src="https://github.com/robertocandales/autocomplete/assets/61159123/cf907a28-dac0-4d25-8cd3-7c2a97c38e85" alt="Image 1" width="48%" style="height: 740px;" >
  <img src="https://github.com/robertocandales/autocomplete/assets/61159123/4657b912-7209-4744-88a4-9f51a2620ebe" alt="Image 2" width="48%" style="height: 740px;">
 </div>

## Getting Started

First, run the development server:

note: Node.js version 18.17 or later is required

```bash
yarn
# then to run the server
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

AutoComplete Component
======================

The **AutoComplete** component provides a user-friendly autocomplete feature for text inputs, fetching options from a provided URL and displaying them dynamically.

Features
--------

*   **Autocomplete:** As the user types into the input field, the component suggests options based on the input.
    
*   **Dynamic Fetching:** Options are fetched asynchronously from a provided URL as the user types.
    
*   **Dropdown:** A dropdown menu appears below the input field to display matching options.
    
*   **Highlight Matching Text:** Matching text within the options is highlighted for better visibility.
    

Performance Considerations
--------------------------

### Debouncing Input

Debouncing input ensures that the component doesn't make a request for every keystroke. Instead, it waits for a short delay after the user stops typing before making a request. This reduces unnecessary network requests and improves performance, especially in cases of rapid typing.

### Conditional Rendering

The component optimizes performance by conditionally rendering certain elements. For example:

*   **Loading Indicator:** The loading indicator is displayed only when data is being fetched, enhancing user experience without unnecessary rendering.
    
*   **No Options Message:** If no options are found, a message indicating this is displayed. This message is only rendered when there are no options to show, minimizing unnecessary DOM updates.
    

### Refs for Input Focus

Using a ref for the input field allows the component to manage focus efficiently. This ensures that the dropdown appears when the input field is focused, enhancing usability without causing unnecessary re-renders.

### State Management

The component utilizes local state effectively to manage various states such as input value, filtered options, loading status, and dropdown visibility. By managing state locally, unnecessary re-renders of parent components are avoided, leading to better performance.

### Selected From Dropdown State

The addition of the **selectedFromDropdown** state optimizes the handling of input blur events. By tracking whether an option was selected from the dropdown, the component can accurately determine when to hide the dropdown menu. This prevents the dropdown from closing prematurely, enhancing the user experience.

Usage
-----

To use the **AutoComplete** component, provide the following props:

*   **fetchUrl**: The URL from which options will be fetched.
    
*   **placeholder** (optional): Placeholder text for the input field (default is 'placeholder').
    

Example:

```
import AutoComplete from './AutoComplete';


const MyComponent = () => {
  return (
    <div>
      <AutoComplete fetchUrl="https://api.example.com/options" placeholder="Search..." />
    </div>
  );
};


export default MyComponent;
```

Customization
-------------

The component can be customized further by modifying its styling or extending its functionality. Additional features such as keyboard navigation or custom option rendering can be implemented based on specific requirements.
