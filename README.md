
# React TextArea

React TextArea is a simple React component for creating text areas with customizable features.

## Features

- **Customizable:** Easily customize the appearance and behavior of the text area component.
- **Flexible:** Supports various configurations such as placeholder text, character limits, and resizable options.
- **Responsive:** Designed to work seamlessly on both desktop and mobile devices.
- **Easy to Use:** Integrate the component into your React projects with just a few lines of code.

## Installation

To use React TextArea in your React project, follow these steps:

1. Install the package via npm or yarn:

   ```
   npm install @paulfranckdencausse/react-text-area
   ```

   or

   ```
   yarn add @paulfranckdencausse/react-text-area
   ```

2. Import the component into your React application:

   ```jsx
   import React from 'react';
   import { TextArea } from '@paulfranckdencausse/react-text-area';

   function App() {
     return (
       <div>
         <TextArea />
       </div>
     );
   }

   export default App;
   ```

3. Customize the component by passing props:

   ```jsx
   <TextArea
     placeholder="Enter your text here..."
     maxLength={100}
     resizable={false}
   />
   ```

4. Enjoy using the React TextArea component in your project!

## Props

The following props can be passed to the TextArea component:

- `placeholder`: Placeholder text displayed inside the text area.
- `maxLength`: Maximum number of characters allowed in the text area.
- `resizable`: Boolean value indicating whether the text area is resizable or not.

## Example

Here's an example of how you can use the React TextArea component in your project:

```jsx
import React from 'react';
import { TextArea } from '@paulfranckdencausse/react-text-area';

function App() {
  return (
    <div>
      <TextArea
        placeholder="Enter your text here..."
        maxLength={100}
        resizable={false}
      />
    </div>
  );
}

export default App;
```

## Contributing

Contributions to React TextArea are welcome! If you find any bugs or would like to suggest new features, please open an issue or submit a pull request on GitHub.

## License

This project is licensed under the MIT License. For more information, see the [LICENSE](LICENSE) file.

---

Feel free to customize this README to include any additional information specific to your project.
