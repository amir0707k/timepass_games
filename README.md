For this, 
I had to make sure it works for both mobile and desktop properly.
So, I made all the designs for mobile-first. committed in different branch. Then I made desktop-version in different branch. In the end, merged both giving the results

Technologies Used
React: A JavaScript library for building user interfaces.

Tailwind CSS: A utility-first CSS framework for styling.

Vite: A fast build tool for modern web development.

Vercel: A platform for deploying and hosting web applications.


Folder Structure
Here’s an overview of the project structure:

src/
├── Components/              # React components
│   ├── StepsContainer/      # Main container for the multi-step form
│   ├── YourInfo/            # Step 1: Personal info form
│   ├── SelectPlan/          # Step 2: Plan selection
│   ├── AddOns/              # Step 3: Add-ons selection
│   ├── Summary/             # Step 4: Summary of selected options
│   ├── Finish/              # Step 5: Confirmation page
│   └── Sidebar/             # Sidebar component for navigation
├── context/                 # React context for state management
├── assets/                  # Static assets (images, icons, etc.)
├── App.jsx                  # Main application component
└── main.jsx                 # Entry point for the application
