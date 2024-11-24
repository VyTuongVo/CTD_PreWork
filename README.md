# CTD_PreWork

Welcome to my README.md file! Here, I will explain everything you need to know about my website, "Cat World." This website was created using the Cat API, available at https://thecatapi.com. It showcases a variety of cat pictures and explores different cat breeds along with their characteristics. I hope this website brings a smile to your face and brightens your day with the joy of cats!

Table of Contents:

1. How to run the website
    - What is needed and bash commands to successfully run "Cat World."
    - Description of website pages
2. Function of each page
    - Functions of each page.
    - Backend description and functionality
3. Pre-work requirements checklist
4. Conclusion

---

1. How to Run the Website

    **This method works best with macOS and Windows. The most effective web browsers are Google Chrome and Safari.

    - I. Access the website GitHub repository at https://github.com/VyTuongVo/CTD_PreWork.
    - II. Clone the repository using the bash command: git clone git@github.com:VyTuongVo/CTD_PreWork.git
    ** The URL git@github.com:VyTuongVo/CTD_PreWork.git can be found on GitHub (website) by pressing the green "Code" button. Locate the SSH URL and copy it.
    - III. You now have a copy of the full website code. First thing you must do is request your API by following instruction from https://thecatapi.com. 
    - IV. Locate .env and enter file. Then enter your API code into the empty VITE_PUBLIC_KEY=
    - V. For more information on the code, see Section 2. IV. The next step is to access the website via an HTTP URL.
        - 1. Make sure your computer has "npm" (Node Package Manager) installed. If not, use "Homebrew" to download "npm"
        **To check if you have "Homebrew" and its version, enter "brew --version" in the terminal.
       - 2. After getting "Homebrew", enter "brew install node" to download Node.js, which also includes npm.  Enter the command "npm install" to npm in case it is not install.
       - 3. Navigate to the CTD_PreWork folder using cd and run "npm run dev" (start a Vite development server) in terminal which will give you a url "Local:   http://localhost:5173/". Copy and paste it to selected web brower and the website will appear.
       - 4. In the case that an error appear when you run "npm run dev", run "npm install vite --save-dev" (will install development as dependency), then run "npm run dev".

2. Description of Website Pages

    Overall:
    The website has three total pages. The vibe and aesthetic I aimed for are simple and warm, like a cat lover creating a free-spirit website to express their love for felines.

    The first page is the homepage, which is accessed as soon as the user enters the site. This page has an interactive feature where a random cat picture appears in the middle of the page. There is also a "Load a New Cat" button that users can press to display a new random cat.

    At the top of the page, there are two tabs: "Cat Gallery" and "The Purrfect Breed."

    In the Cat Gallery tab, there are three columns and five rows of cat pictures. Users can load a new set of pictures by pressing the "Load New Gallery" button. To return to the homepage, press the "Home" button.

    If you press "The Purrfect Breed" tab, you will enter the final page. This page matches users with the best cat breeds based on their answers to five questions. To learn more about the breed, users are encouraged to click the Wikipedia page link. Users can edit their answers and reselect "Find My Cat Breed" to get new results.
    **More information and instructions can be found on the page.

    Code:
    All codes are in the CTD_PREWORK folder. Inside the folder, there are two subfolders containing code for the tabs: cat_gallery and meet_the_breeds. The homepage code and resources are located outside of these subfolders.

    In general, each page was created using:

    HTML: For general website setup.
    JavaScript (JS): For backend functionality.
    CSS: For website styling.
    **Please refer to the indivial code files' comments and notations for more detailed information.


3. Pre-work requiremnt checklist

    - Display the data for at least 2 of the end-points in the API
        ** For this website, I used two APIs: One to access images (used on the homepage for "Random Cat Image" and in the Cat Gallery page). Another to access breed descriptions (used as the foundation for "The Purrfect Breed," where user input is matched with the breed database for a response).
    - Include navigation from each end-point’s page to the other end-points that are displayed
        ** Tabs at the top of the page navigate between "Cat Gallery" and "The Purrfect Breed" in homepage. The Home button on each page to return back to Homepage also allows navigation between endpoints.
    - Issue new GET requests for the linked data to display in the linked pages.
        **In Cat Gallery and the Purrfect Breed, Get request is used to get images and Breed information.


4. Conclusion

    Thank you so much for interacting with my website. While it is simple, I hope that the adorable and funny cat pictures brighten your day. If they did, then the website has fulfilled its purpose—to bring a little joy by surrounding users with cats.

    On another note, I truly enjoyed creating this website and am very excited about the opportunity to be part of Code The Dream. CTD will provide me with invaluable learning experiences and opportunities that are essential for thriving in the competitive tech industry. I am especially excited about the mentorship and the valuable hand-on Python knowledge I will gain.

    Once again, thank you so much for your consideration. Thank you for reading, and have a PURRfect day!

