# ST10456532MASTPOE
App Overview
The app provides a basic menu management system for a restaurant, with three main screens:

HomeScreen: Displays average prices for each course and provides navigation options.
ManageMenuScreen: Allows users to add and remove menu items.
GuestMenuScreen: Displays menu items filtered by course (e.g., Starters, Mains, Desserts).
Detailed Functionality
1. HomeScreen
Purpose: This is the main screen, giving users an overview of average prices for menu courses and quick navigation options.

Calculate Average Price:

The screen includes a function calculateAveragePrice to calculate the average price for each course (Starters, Mains, Desserts).
It filters menu items by course, sums their prices, and calculates the average, which is displayed on the screen.
Display Average Prices:

The screen shows average prices for each course type (Starters, Mains, Desserts) by calling the calculateAveragePrice function for each category.
Navigation:

The screen has buttons to navigate to:
Manage Menu: Opens ManageMenuScreen, where users can manage (add or remove) items on the menu.
Guest Menu for each course: Navigates to GuestMenuScreen, showing menu items filtered by course.
This screen thus serves as a dashboard, displaying menu details and providing links to more specific actions.

2. ManageMenuScreen
Purpose: This screen allows users to manage (add or delete) items on the menu.

Add New Menu Item:

Users can enter a new menu item by specifying:
Item Name
Price
Course (pre-set to "Starters" by default in the example)
When the Add Item button is pressed, the new item is added to the menu list if it has valid details (non-empty name and price).
The addItem function creates a new MenuItem object and appends it to the list of items if the input is valid.
Remove Menu Item:

Each item in the menu list is displayed with a "Remove" button.
When pressed, this button removes the item from the menu by calling the removeItem function with the item's id.
This screen effectively functions as a menu editor, enabling users to create or delete menu items as needed.

3. GuestMenuScreen
Purpose: This screen displays a filtered list of menu items based on the course selected (e.g., "Starters," "Mains," "Desserts").

Filter Menu Items by Course:

The screen retrieves the course parameter from the route and filters menuItems based on the selected course.
Only items from the specified course are displayed.
Display Menu Items:

If items are found for the selected course, they’re shown in a list format, displaying each item’s name and price.
If no items match the selected course, a message indicates that no items are available for that course.
This screen provides a simple, read-only view for guests to view the available menu items for a particular course.

Key Functionalities Across the App
Navigation:

The app uses react-navigation for moving between screens:
From HomeScreen to ManageMenuScreen and GuestMenuScreen.
Parameters (such as course) are passed through the route to control which items are displayed in GuestMenuScreen.
Data Management:

The app manages menu items in a shared state (passed down as props or maintained in a parent component, like App).
State updates in ManageMenuScreen (like adding or removing items) dynamically update the data displayed in HomeScreen and GuestMenuScreen.
Summary
The app is a basic menu management and viewing system that allows:

HomeScreen: Overview of average prices and quick access to other screens.
ManageMenuScreen: Adding or removing menu items.
GuestMenuScreen: Viewing menu items by course.
Each screen serves a specific function and collectively provides a simple but functional restaurant menu management experience.
