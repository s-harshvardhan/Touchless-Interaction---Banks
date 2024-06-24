## Touchless HCI Prototype - Unified Self-Service System for Banks

**Project Overview**

This project is a prototype for a unified touchless system designed for banks. It aims to consolidate functionalities currently offered by various self-service machines like cash withdrawal, deposit, cheque deposit, and account management into a single touchless interface. While not offering complete end-to-end functionality, this prototype demonstrates the basic workflow and data flow of the concept.

**Current functionalities:**

* Account Management
* Cash Withdrawal (**Highly Recommended**)
* Cheque Deposit

**Why Cash Withdrawal is Recommended:**

The cash withdrawal service best exemplifies the core concept. It showcases the difference between a touch-based UI and a touchless UI for self-service machines. Additionally, it demonstrates real-time updates within the web app's UI based on changes made in the Firebase backend.

**Running the Web Application**

**Local Setup (Recommended):**

1. **Prerequisites:** Ensure you have npm, Node.js, and Firebase installed. Verify installations by running `node --version` and `npm --version` commands in your terminal. If not installed, download and install Node.js from the official website [https://nodejs.org/en]. Choose the option to add Node.js and npm to your system path during installation.
2. **Firebase Installation:** Once Node.js and npm are installed, use the command `npm -g install firebase` to install Firebase globally on your system.
3. **Project Setup:**
   * Unzip the downloaded project folder.
   * Open a terminal or command prompt and navigate to the project directory using the `cd` command (e.g., `cd path/to/project`).
   * Run `npm start` which will automatically launch the web application in your default browser. Alternatively, access it manually at `localhost:3000`.

**Hosted Version:**

The hosted version is available at [https://touchless-hci-new.web.app/]. This version offers all functionalities like the local version, but may require a full refresh to reflect real-time database changes.

**Refresh Process for Hosted Version:**

1. Imagine you are at `https://touchless-hci-new.web.app/XYZ123` (or any path appended to the base URL).
2. Remove any additional path from the URL (resulting in just `https://touchless-hci-new.web.app/`).
3. Click refresh to reload the web app from scratch, reflecting any backend changes in the UI.

**Local vs. Hosted Refresh:**

The local version automatically reflects backend changes upon refresh, regardless of the URL path.

**Touchless Interaction**

1. Connect your UltraLeap Motion Controller 2.
2. Enable the touchless service and ensure it's in "hover and tap" mode.
3. Verify proper screen dimensions and device configuration.
4. Use hand gestures as your cursor and selection tool on the screen.
5. For optimal experience, use the web app in full-screen mode.

**Authentication Screens (Card & Facial Recognition):**

**Note:** Since a PC lacks card reader and facial recognition hardware, these screens provide dummy functionality for demonstration purposes.

1. **Card Authentication:**
   * Press "y" to simulate successful card authentication.
   * Press "n" to replicate a failed card tap attempt (five consecutive "n" presses terminate the transaction).
2. **Facial Recognition:**
   * Press "y" to simulate successful facial recognition.
   * Press "n" to replicate a failed facial recognition attempt (five consecutive "n" presses terminate the transaction).

**Motion Sensor and Webcam:**

If your UltraLeap motion sensor and webcam do not work simultaneously, disconnect the motion sensor for the first two screens (card and facial recognition) as navigation and selection aren't required there. Reconnect the sensor after successful authorization on the third screen for normal touchless interaction.

**Testing Backend Database Integration:**

1. Access the Firebase console for the project's backend and database at [https://console.firebase.google.com/project/touchless-hci-new].
2. In the left panel, navigate to "Firestore Database".
3. Locate the collection named "availableDenominations" containing boolean values for four variables (5, 10, 20, and 50), representing bill denominations available for cash withdrawal.
4. Modify these values and navigate to the cash withdrawal screen in the web app to observe reflected changes in the UI.

## Testing Backend Database Integration 

**Test Cases:**

1. Set the value of "5" to false while keeping others true in the "availableDenominations" collection. Navigate to the cash withdrawal screen in the web app to observe the reflected changes in the UI (5 denomination no longer available).
2. Set the values of "5" and "10" to false, or set "5", "10", and "20" to false while keeping "50" true in the "availableDenominations" collection. Observe the UI update in the cash withdrawal screen, reflecting the limited bill denominations available.
3. Alternatively, set all the values to false, which means that there are no denominations available in the machine. Go to service selection screen: you will notice that the overall option to select 'Cash Withdrawal' will be faded and you will not be able to select it.

**Responsiveness**

Feel free to resize your browser window to test the web app's responsiveness in vertical layouts or smaller widths. However, the ideal viewing experience is achieved on a 16:9 screen in landscape orientation.

**Additional Notes**

* This prototype is under development and may contain bugs or limitations.
* Future iterations will focus on expanding functionalities, improving UI/UX, and enhancing touchless interaction.

**Feel free to explore the web app and provide feedback!**
