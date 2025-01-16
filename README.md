# API Story Viewer

This project was developed using TypeScript and aims to fetch data from an API, process it, and display it in a dynamic interface. The final interface presents the data in an Instagram story-like format.

## Project Structure

The project is divided into two main directories:

1. **data-manipulation**  
   Contains the functions responsible for:

   - Fetching data from the API.
   - Manipulating, filtering, and organizing the data efficiently for the interface.

2. **interface**  
   Contains the code that:
   - Interacts with the DOM to display the data.
   - Implements the Instagram story functionality, allowing users to navigate between data displays.

## Technologies Used

- **TypeScript**: for static typing and code organization.
- **HTML/CSS**: to build the visual interface.
- **Fetch API**: for communication with the external API.
- **DOM Manipulation**: for dynamic content interaction.

## Features

1. **API Consumption**  
   Data is loaded from an external API.

2. **Data Manipulation**  
   The data is processed in the `data-manipulation` module, allowing customization for various purposes.

3. **User Interface**  
   The data is displayed in a dynamic interface, including a story-like view.

4. **Story Navigation**  
   The interface supports smooth navigation between stories, mimicking the Instagram experience.

## Installation

1. Clone the repository:

   ```bash
   git clone <https://github.com/Dinihz/ts-js-challenge.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd APIStoryViewer
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## How to Contribute

1. Fork the project.
2. Create a branch for your feature or bug fix:
   ```bash
   git checkout -b my-feature
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Description of changes"
   ```
4. Push your changes:
   ```bash
   git push origin my-feature
   ```
5. Open a Pull Request for review.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
